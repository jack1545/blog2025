import { projectsData } from '@/lib/projects-data';
import ProjectCard from '@/components/ProjectCard';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { format } from 'date-fns';

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold gradient-text">AI驱动的增长黑客</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          将8年SEO增长经验与AI应用开发能力深度融合，从战略规划到产品落地，驱动业务可持续增长。
        </p>
      </section>

      <section>
        <h2 className="font-mono text-2xl font-bold mb-6 border-b border-border-color pb-2">
          <i className="fa-solid fa-lightbulb text-yellow-400 mr-3"></i>
          近期AI应用项目案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

       <section className="mt-12">
        <h2 className="font-mono text-2xl font-bold mb-6 border-b border-border-color pb-2">
          <i className="fa-solid fa-rss text-orange-400 mr-3"></i>
          最新博客文章
        </h2>
        <div className="space-y-6">
          {latestPosts.length > 0 ? (
            latestPosts.map(({ slug, date, title, excerpt }) => (
              <Link key={slug} href={`/blog/${slug}`} className="block p-4 bg-card-bg border border-border-color rounded-lg hover:border-accent-blue transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="font-bold text-accent-blue">{title}</h3>
                  <p className="text-sm text-text-secondary mt-1 mb-2 font-mono">
                    {format(new Date(date), 'yyyy年MM月dd日')}
                  </p>
                  <p className="text-sm text-text-secondary">{excerpt}</p>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-border-color rounded-lg">
                <p className="text-text-secondary">暂无文章。敬请期待！</p>
            </div>
          )}
        </div>
        {latestPosts.length > 0 && (
            <div className="text-right mt-4">
                <Link href="/blog" className="font-mono text-sm text-accent-blue hover:underline">
                    查看所有文章 &rarr;
                </Link>
            </div>
        )}
      </section>
    </div>
  );
} 