import Link from "next/link";

const TAG_COLORS: Record<string, string> = {
  programming: "#5A7D9A",
  TIL: "#9CA88D",
  productivity: "#7E6A93",
  all: "#36454F",
};

interface PostTagBadgeProps {
  tag: string;
}

export const PostTagBadge: React.FC<PostTagBadgeProps> = ({ tag }) => {
  const color = TAG_COLORS[tag] || undefined;
  return (
    <Link
      href={tag === "all" ? "/blog" : `/blog?tag=${encodeURIComponent(tag)}`}
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-150 mr-2 mb-2 ${
        color
          ? ""
          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      }`}
      style={
        color ? { backgroundColor: `${color}CC`, color: "#fff" } : undefined
      }
      aria-label={`View all posts tagged with ${tag}`}
    >
      #{tag}
    </Link>
  );
};
