import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
    '/blog': {
    name: 'blog',
  },
  "https://github.com/kyleecodes":
  {
    name: "github",
  },
  "https://www.linkedin.com/in/kyleeintech/":
  {
    name: "linkedin",
  },
  '/faves': {
    name: 'faves'
  }
};


const Navbar = () => {
  return (
    <aside
      className="w-full h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex flex-row items-center justify-center py-0 px-4
      lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-48 lg:bg-white lg:dark:bg-black lg:border-b-0 lg:border-r lg:border-gray-200 lg:dark:border-gray-800 lg:flex-col lg:items-center lg:py-8 lg:px-0 transition-all z-40"
    >
      <nav className="flex flex-row gap-8 w-full items-center justify-center h-full lg:flex-col lg:gap-6 lg:w-full lg:items-center lg:justify-start">
        {Object.entries(navItems).map(([href, { name }]) => (
          <Link
            key={href}
            href={href}
            className="text-gray-800 dark:text-gray-100 hover:underline text-lg font-medium px-2 py-1 rounded transition-colors duration-150"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Navbar;
