import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { format } from 'date-fns';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold gradient-text mb-8">博客文章</h1>
      <div className="space-y-8">
        {allPosts.map(({ slug, date, title, excerpt }) => (
          <div key={slug}>
            <h2 className="text-2xl font-bold font-serif text-accent-blue hover:underline">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="text-sm text-text-secondary mt-1 mb-2 font-mono">
              {format(new Date(date), 'yyyy年MM月dd日')}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 