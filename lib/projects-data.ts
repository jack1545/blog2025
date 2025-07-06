export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'HTML卡片转图片工具',
    description: '一个将HTML知识卡片快速转换为高清图片的在线工具，方便在社交媒体分享。',
    url: 'https://web2png.mrmine.org/',
    tags: ['Next.js', 'Puppeteer', 'Vercel', 'Tool'],
  },
  {
    id: 2,
    title: 'AI 可视化航海核心知识卡片',
    description: '浓缩21天航海之旅的精华，将AI可视化的核心理念、工具和技能通过知识卡片呈现。',
    url: 'https://scys.mrmine.org/aiviews.html',
    tags: ['AI', 'Visualization', 'Knowledge Base'],
  },
  {
    id: 3,
    title: '《生财宝典》共读知识聚合',
    description: '一个信息聚合页面，用于整理和展示"生财宝典"共读活动中的核心知识与讨论。',
    url: 'https://scys.mrmine.org/scbd.html',
    tags: ['Knowledge Base', 'Community'],
  },
  {
    id: 4,
    title: 'AI雷诺曼精准寻物',
    description: '结合传统雷诺曼牌意与AI算法，为用户提供一个精准、有趣的在线寻物占卜体验。',
    url: 'https://lenormanlastdropstudio.com/',
    tags: ['AI', 'Next.js', 'Vercel', 'Divination'],
  },
  {
    id: 5,
    title: 'Labubu动态壁纸站',
    description: '使用Next.js构建的动态壁纸下载站，为Labubu爱好者提供丰富的壁纸资源。',
    url: 'https://www.labubuwallpaperdownload.com/',
    tags: ['Next.js', 'Wallpaper', 'Community'],
  },
  {
    id: 6,
    title: '幸运大转盘应用',
    description: '早期使用Cursor AI编程助手快速搭建的在线抽奖转盘应用，一个有趣的AI编程实践。',
    url: 'https://www.luckydrawonline.com/',
    tags: ['JavaScript', 'HTML5', 'Tool', 'AI-Generated'],
  },
  {
    id: 7,
    title: 'IP风险检测工具',
    description: '一个轻量级的在线工具，用于快速检测和评估IP地址的潜在风险。',
    url: 'https://iprisk.mrmine.org/',
    tags: ['Next.js', 'Tool', 'Security'],
  },
  {
    id: 8,
    title: 'HTML5游戏站群CMS',
    description: '一个强大的内容管理系统，用于批量管理和运营H5小游戏网站。',
    url: 'https://www.mrmine.org/',
    tags: ['PHP', 'CMS', 'Gaming'],
  },
]; 