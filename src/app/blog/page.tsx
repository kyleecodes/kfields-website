import Link from "next/link";
import { BlogTagsCard } from "../../../components/cards/BlogTagsCard";
import { getAllPosts, PostData } from "../../../lib/posts";

export default async function BlogHome() {
  const posts = await getAllPosts();
  return (
    <main className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold"> blog</h1>
      <BlogTagsCard />
      {posts.map((post: PostData) => (
        <div key={post.title}>
          <Link
            href={`/blog/${encodeURIComponent(post.title)}`}
            className="text-xl font-semibold hover:underline"
          >
            {post.title}
          </Link>
          <h3 className="text-l">{post.date}</h3>
        </div>
      ))}
    </main>
  );
}
