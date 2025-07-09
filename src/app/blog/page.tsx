import Link from "next/link";
import { BlogTagsCard } from "../../../components/cards/BlogTagsCard";
import { PostTagBadge } from "../../../components/common/PostTagBadge";
import { getAllPosts, PostData } from "../../../lib/posts";

export default async function BlogHome({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const params = await searchParams;
  const posts = await getAllPosts();
  const tag = params?.tag;
  const filteredPosts = tag
    ? posts.filter((post): post is PostData => !!post && post.tag === tag)
    : posts.filter((post): post is PostData => !!post);
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">blog</h1>
      <BlogTagsCard />
      <section className="flex flex-col gap-6 mt-4">
        {filteredPosts.map((post: PostData) => (
          <div key={post.id} className="border-b pb-4">
            <Link
              href={`/blog/${encodeURIComponent(post.id)}`}
              className="text-xl font-semibold hover:underline text-left block"
            >
              {post.title}
            </Link>
            <h3 className="text-sm text-gray-500 mt-1 mb-2">{post.date}</h3>
            <PostTagBadge tag={post.tag} />
          </div>
        ))}
      </section>
    </main>
  );
}
