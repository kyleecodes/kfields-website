import { getPostData, PostData } from "../../../../lib/posts";
import { PostTagBadge } from "../../../../components/common/PostTagBadge";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{postData.title}</h1>
      <h2 className="text-xl sm:text-l font-bold mb-2">{postData.date}</h2>
      <div className="inline-flex">
        <PostTagBadge tag="all" />
        <PostTagBadge tag={postData.tag} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}
