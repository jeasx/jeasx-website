export default function Aside({ links }) {
  return (
    <div class="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" class="w-56">
        <h2
          id="on-this-page-title"
          class="font-display text-sm font-medium text-slate-900 dark:text-white"
        >
          On this page
        </h2>
        <ol role="list" class="mt-4 space-y-3 text-sm">
          {links.map(({ label, link, links }) => (
            <li>
              <h3>
                <a
                  class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  href={link}
                >
                  {label}
                </a>
              </h3>
              {links && (
                <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                  {links.map(({ label, link }) => (
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href={link}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
