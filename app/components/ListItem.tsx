import Link from "next/link";
import getFormatDate from "@/libs/getFormatDate";

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormatDate(date);

  return (
    <li className="dark:bg-gray-700 p-2 rounded-xl mt-4 text-2xl dark:text-white/90">
      <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  )
}