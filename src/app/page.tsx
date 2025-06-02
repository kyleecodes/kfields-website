import { BlogTagsCard } from "../../components/cards/BlogTagsCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-3xl sm:text-4xl font-bold">
          hello, I&apos;m Kylee.
        </h2>
        <p>
          I write about <strong>software engineering </strong> and{" "}
          <strong>the art of learning</strong>. 👾
        </p>
        <BlogTagsCard />
      </main>
    </div>
  );
}
