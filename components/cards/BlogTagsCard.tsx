import { PostTagBadge } from "../common/PostTagBadge";

export const BlogTagsCard = () => {
  return (
    <div className="shadow flex flex-wrap gap-2">
      <PostTagBadge tag="programming" color="#5A7D9A" />
      <PostTagBadge tag="TIL" color="#C4A69F"/>
      <PostTagBadge tag="stories" color="#9CA88D" />
      <PostTagBadge tag="productivity" color="#36454F"/>
      <PostTagBadge tag="random" color="#7E6A93"/>
    </div>
  );
}