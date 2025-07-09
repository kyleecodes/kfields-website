import Link from "next/link";
import Image from "next/image";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://github.com/kyleecodes": {
    name: "github",
  },
  "https://www.linkedin.com/in/kyleeintech/": {
    name: "linkedin",
  },
  "/faves": {
    name: "faves",
  },
};

const Navbar = () => {
  return (
    <aside
      className="w-full h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex flex-row items-center justify-center py-0 px-4
      lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-48 lg:bg-white lg:dark:bg-black lg:border-b-0 lg:border-r lg:border-gray-200 lg:dark:border-gray-800 lg:flex-col lg:items-center lg:py-8 lg:px-0 transition-all z-40"
    >
      {/* PFP only for left sidebar (top-aligned) */}
      <div className="hidden lg:block flex-shrink-0 lg:mb-8">
        <Image
          src="/pfp.svg"
          alt="Profile photo"
          width={84}
          height={84}
          className="rounded-full"
        />
      </div>
      <nav
        className="flex flex-row gap-8 w-full items-center justify-center h-full lg:flex-col lg:gap-6 lg:w-full lg:items-center lg:justify-start
        max-[600px]:gap-4 max-[600px]:text-base max-[600px]:px-1 max-[600px]:py-0.5 max-[400px]:gap-2"
      >
        {Object.entries(navItems).map(([href, { name }]) => (
          <Link
            key={href}
            href={href}
            className="text-gray-800 dark:text-gray-100 hover:underline text-lg font-medium px-2 py-1 rounded transition-colors duration-150
              max-[600px]:text-base max-[600px]:px-1 max-[600px]:py-0.5 max-[400px]:text-sm max-[400px]:px-1 max-[400px]:py-0.5"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
