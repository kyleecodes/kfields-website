import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostData {
  title: string;
  date: string;
  tag: string;
  contentHtml: string;
}

export async function getPostData(title: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${title}.md`);
  const fileContents: string = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult: matter.GrayMatterFile<string> = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml: string = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    title,
    date: matterResult.data.date as string,
    tag: matterResult.data.tag as string,
    contentHtml,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const title = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      contentHtml: matterResult.content,
      ...matterResult.data,
    };
  });
}
