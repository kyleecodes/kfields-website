"use client"

import { getPostData, PostData } from '../../../../lib/posts';

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await getPostData()
 
  // Props returned will be passed to the page component
  return { props: { posts } }
}

export default function Post({ params }) {
  const postData: PostData = getPostData(params.title);
  return (
    <main>
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.tag}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  );
}