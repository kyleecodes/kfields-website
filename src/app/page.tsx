import { BlogTagsCard } from "../../components/cards/BlogTagsCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         <h2 className="text-3xl sm:text-4xl font-bold">hello, I&apos;m Kylee.</h2>
        <p>
         I write about <strong>technology </strong> and <strong>the art of software engineering</strong>. 👾
        </p>
            {/* <ol className="list-none">
             Not sure where to begin? Start here:
              <li><span role="img" aria-label="sparkles">✨</span> Ergonomic stuff how to blah blah blah</li>
              <li><span role="img" aria-label="robot">🤖</span> blog post </li>
              <li><span role="img" aria-label="laptop">💻</span> blog post </li>
              <li><span role="img" aria-label="music">🎶</span> blog post </li>
            </ol> */}
            <BlogTagsCard/>
      </main>
    </div>
  );
}
