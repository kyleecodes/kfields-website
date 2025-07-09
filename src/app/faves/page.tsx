export default function Faves() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">faves ❤️</h1>
      <p>Things I&apos;ve recommended to friends:</p>
      <section>
        <h2 className="text-xl font-bold mb-2">blog posts</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://norvig.com/21-days.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Teach Yourself Programming in Ten Years by Peter Norvig
            </a>
          </li>
          <li>
            <a
              href="https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              The Law of Leaky Abstractions by Joel Spolsky
            </a>
          </li>
          <li>
            <a
              href="https://bartoszmilewski.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Bartosz Milewski Programming Cafe
            </a>
          </li>
          <li>
            <a
              href="https://blog.ncase.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Nicky Case Blog
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">videos</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PL84A56BC7F4A1F852"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Programming Paradigms - Stanford CS106A
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=0SARbwvhupQ&ab_channel=GoogleforDevelopers"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              The Myth of the Genius Programmer - Google Tech Talks
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Introduction to Algorithms - MIT OpenCourseWare
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=rI8tNMsozo0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Simple Made Easy - Rich Hickey (creator of Clojure)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/Computerphile"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Computerphile
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/3blue1brown"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              3Blue1Brown
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Fireship"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Fireship
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@TheCodingTrain"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              TheCodingTrain
            </a>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">reads</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://web.mit.edu/6.001/6.037/sicp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Structure and Interpretation of Computer Programs
            </a>
          </li>
          <li>
            <a
              href="https://www.oreilly.com/library/view/learning-github-actions/9781098131067/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Learning GitHub Actions by Brent Laster
            </a>
          </li>
          <li>
            <a
              href="https://vpb.smallyu.net/%5BType%5D%20books/The%20Little%20Schemer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              The Little Schemer
            </a>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">open-source</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://blog.chayn.co/how-github-introduced-a-new-chapter-for-open-source-tech-at-chayn-5ff2ad1b6af3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              How GitHub Introduced a New Chapter for Open-Source Tech at Chayn
              (Featured)
            </a>
          </li>
          <li>
            <a
              href="https://forgoodfirstissue.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              First Issue for Good
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sindresorhus/awesome"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Awesome Lists
            </a>
          </li>
          <li>
            <a
              href="https://pine64.org/devices/pinephone/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Pinephone
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">hardware</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://x-bows.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              X-bows Keyboard
            </a>
          </li>
          <li>
            <a
              href="https://homrest.com/products/homrest-ergonomic-home-office-chair-with-flip-up-armrests-135-reclining-computer-desk-chair-nappa-pu-leather-beige?currency=USD&variant=46267789246619&utm_source=google&utm_medium=cpc&utm_campaign=Google%20Shopping&stkn=d4407f6322e8&gad_source=1&gad_campaignid=21795668117&gbraid=0AAAAACKtL5qP5fdNSs9uIdIRpx-_9B-HW&gclid=Cj0KCQjw0erBBhDTARIsAKO8iqSsLOHJVA9FFv-i-HGjnNapaF7tJK3bZpDEv9kCH9g3gulQFJocyiwaArXCEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              This Crazy Comfy and Ergonomic Office Chair
            </a>
          </li>
          <li>
            <a
              href="https://www.logitech.com/en-us/shop/p/mx-vertical-ergonomic-mouse.910-005447"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Logitech MX Vertical Mouse
            </a>
          </li>
          <li>
            <a
              href="https://www.moleskine.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Moleskine notebooks
            </a>
          </li>
          <li>Apple Watch</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">software (in no order)</h2>

        <ol className="border-b pb-4 list-disc">
          <li>Git</li>
          <li>Debian OS</li>
          <li>WSL2</li>
          <li>Docker</li>
          <li>ESLint/Prettier</li>
          <li>Vercel</li>
          <li>Thunderclient</li>
          <li>GitHub Actions</li>
          <li>CodeQL</li>
          <li>Liveshare</li>
          <li>tmux multiplexer</li>
          <li>Bear Markdown note-taking</li>
          <li>Mindnode mindmapping</li>
          <li>Text Blaze</li>
          <li>PowerToys</li>
          <li>FocusBear</li>
          <li>SuperCollider</li>
          <li>Audacity</li>
          <li>Lighthouse</li>
          <li>Bitwarden</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">fun</h2>

        <ol className="border-b pb-4 list-disc">
          <li>
            <a
              href="https://www.zachtronics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Zachtronics Games
            </a>
          </li>
          <li>
            <a
              href="https://ncase.me/trust/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              The Evolution of Trust
            </a>
          </li>
          <li>
            <a
              href="https://ncase.me/fireflies/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              Fireflies
            </a>
          </li>
          <li>
            <a
              href="https://esolangs.org/wiki/Main_Page"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors"
            >
              The fact that esoteric languages exist lol
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
}
