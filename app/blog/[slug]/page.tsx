import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

// This function allows Next.js to know which slugs are available at build time
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <article className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold gradient-text leading-tight mb-4">{postData.title}</h1>
        <p className="text-text-secondary font-mono mb-8">{format(new Date(postData.date), 'yyyy年MM月dd日')}</p>
        
        <div 
          className="prose prose-invert prose-lg max-w-none
                     prose-h2:font-serif prose-h2:text-accent-green prose-h2:border-b prose-h2:border-border-color prose-h2:pb-2
                     prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-text-primary
                     prose-blockquote:border-l-accent-blue prose-blockquote:text-text-secondary
                     prose-code:bg-card-bg prose-code:p-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                     prose-pre:bg-card-bg prose-pre:border prose-pre:border-border-color
                    "
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
} 