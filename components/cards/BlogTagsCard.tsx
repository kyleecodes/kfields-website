import { PostTagBadge } from "../common/PostTagBadge";

export const BlogTagsCard = () => {
  return (
    <div className="shadow flex flex-wrap gap-2">
      <PostTagBadge tag="programming" />
      <PostTagBadge tag="TIL" />
      <PostTagBadge tag="productivity" />
      <PostTagBadge tag="community" />
      <PostTagBadge tag="all" />
    </div>
  );
};
