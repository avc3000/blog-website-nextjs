import { getSortedPostData } from "@/libs/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostData();

  return (
    <section className="bg-black p-4 rounded-xl mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white mb-5">Blog & Post</h2>
      <ul className="w-full">
        {
          posts.map(post => (
            <ListItem key={post.id} post={post} />
          ))
        }
      </ul>
    </section>
  )
}