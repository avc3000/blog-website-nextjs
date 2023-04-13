import getFormattedDate from "@/libs/getFormatDate";
import { getSortedPostData, getPostData } from "@/libs/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostData();

  return posts.map((post) => ({
    postId: post.id
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostData();
  const { postId } = params;
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return { title: post.title };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostData();
  const { postId } = params;

  if (!posts.find(post => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="bg-black p-2 mt-4 rounded-xl px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/" className="no-underline">⬅️ Back to home</Link>
        </p>
      </article>
    </main>
  )
}