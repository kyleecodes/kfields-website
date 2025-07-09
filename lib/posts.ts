"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostData {
  id: string;
  title: string;
  date: string;
  tag: string;
  contentHtml: string;
}

export async function getPostData(id: string): Promise<PostData> {
  let fullPath = path.join(postsDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post file not found for id: ${id}`);
    }
  }
  const fileContents: string = fs.readFileSync(fullPath, "utf8");

  const matterResult: matter.GrayMatterFile<string> = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml: string = processedContent.toString();

  return {
    id,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    tag: matterResult.data.tag as string,
    contentHtml,
  };
}

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const validFile = fs.lstatSync(fullPath).isFile();
    if (!validFile) {
        console.log(`Skipping ${fileContents}: not a valid file.`);
        return;
      }
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      contentHtml: matterResult.content,
      ...matterResult.data,
    };
  });
}
