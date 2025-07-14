import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import TurndownService from 'turndown';

const turndownService = new TurndownService();

const BASE_URL = 'https://new.web.cafe';
const TOPICS_URL = `${BASE_URL}/topics`;
const POSTS_DIR = path.join(process.cwd(), 'posts');

interface Post {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  url: string;
}

async function getPostUrls(browser: Browser): Promise<string[]> {
  const page = await browser.newPage();
  await page.goto(TOPICS_URL);

  const postUrls: string[] = [];
  let hasNextPage = true;

  console.log('开始获取所有帖子链接...');

  while (hasNextPage) {
    await page.waitForSelector('a.topic-title', { timeout: 10000 }).catch(() => {
        console.log('在10秒内没有找到 a.topic-title 元素。');
        hasNextPage = false;
    });

    const urlsOnPage = await page.$$eval('a.topic-title', (links) =>
      links.map((link) => (link as HTMLAnchorElement).href)
    );
    
    if (urlsOnPage.length > 0) {
        postUrls.push(...urlsOnPage);
        console.log(`第 ${await page.evaluate(() => new URLSearchParams(window.location.search).get('p') || '1')} 页找到 ${urlsOnPage.length} 个链接。`);

        const nextPageButton = await page.$('a[rel="next"]');
        if (nextPageButton) {
            await nextPageButton.click();
            await page.waitForURL(new RegExp(`${TOPICS_URL}\\?p=\\d+`));
        } else {
            hasNextPage = false;
        }
    } else {
        hasNextPage = false;
    }
  }

  console.log(`总共获取到 ${postUrls.length} 个帖子链接。`);
  await page.close();
  return postUrls;
}

async function getPostDetails(page: Page, url: string): Promise<Post | null> {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    const title = await page.$eval('h1', (el) => el.textContent?.trim() || '');
    const date = new Date().toISOString().split('T')[0];
    
    const contentHtml = await page.$eval('.topic-content .content', (el) => el.innerHTML);
    const content = turndownService.turndown(contentHtml);
    const excerpt = content.substring(0, 100).replace(/\n/g, ' ') + '...';

    return { title, date, excerpt, content, url };
  } catch (error) {
    console.error(`获取帖子详情失败: ${url}`, error);
    return null;
  }
}

function savePostToFile(post: Post) {
  const fileName = `${path.basename(post.url)}.md`;
  const filePath = path.join(POSTS_DIR, fileName);

  const frontmatter = `---
title: '${post.title.replace(/'/g, "''")}'
date: '${post.date}'
excerpt: '${post.excerpt.replace(/'/g, "''")}'
---

`;

  const fileContent = `${frontmatter}${post.content}`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`已保存帖子: ${fileName}`);
}

async function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  const postUrls = await getPostUrls(browser);
  
  const concurrency = 5; // Playwright并发数不宜过高
  console.log(`开始抓取帖子内容，并发数: ${concurrency}`);

  for (let i = 0; i < postUrls.length; i += concurrency) {
    const batch = postUrls.slice(i, i + concurrency);
    const promises = batch.map(async (url) => {
        const page = await context.newPage();
        const post = await getPostDetails(page, url);
        await page.close();
        return post;
    });

    const posts = await Promise.all(promises);

    for (const post of posts) {
      if (post) {
        savePostToFile(post);
      }
    }
    console.log(`完成一批次 ${batch.length} 个帖子的抓取。`);
  }

  await browser.close();
  console.log('所有帖子抓取并保存完毕！');
}

main().catch(error => {
  console.error('执行抓取任务时发生严重错误:', error);
}); 