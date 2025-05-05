export default function Navigation() {
  return (
    <nav class="text-base lg:text-sm">
      <ul role="list" class="space-y-9">
        {NAV_ITEMS.map(({ label, links }) => (
          <li>
            <h2 class="font-display font-medium text-slate-900 dark:text-white">
              {label}
            </h2>
            <ul
              role="list"
              class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
            >
              {links.map(({ label, link }) => (
                <li class="relative">
                  <a
                    class={
                      this.request.path === link
                        ? "block w-full pl-3.5 font-semibold text-sky-500 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-sky-500"
                        : "block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    }
                    href={link}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const NAV_ITEMS = [
  {
    label: "Introduction",
    links: [
      { label: "Philosophy", link: "/philosophy" },
      { label: "Getting started", link: "/quickstart" },
    ],
  },
  {
    label: "Essentials",
    links: [
      { label: "JSX &amp; SSR", link: "/jsx" },
      { label: "Routes &amp; Guards", link: "/routes" },
      { label: "CSS &amp; JavaScript", link: "/browser" },
      { label: "Configuration", link: "/configuration" },
      { label: "Hosting", link: "/hosting" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "FAQ", link: "/faq" },
      { label: "News", link: "/news" },
      { label: "Showcases", link: "/showcases" },
    ],
  },
  {
    label: "Contributing",
    links: [
      { label: "Contact", link: "/contact" },
      { label: "License", link: "/license" },
    ],
  },
];
