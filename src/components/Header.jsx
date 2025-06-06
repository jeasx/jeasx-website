export default function Header() {
  const q = this.request.query["q"];

  return (
    <header class="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:bg-transparent dark:shadow-none">
      <div class="mr-6 flex lg:hidden">
        <button
          data-navigation-toggle
          type="button"
          class="relative"
          aria-label="Open navigation"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            class="h-6 w-6 stroke-slate-500"
          >
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
          <div
            hidden
            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"
          ></div>
        </button>
      </div>
      <div class="relative flex flex-grow basis-0 items-center">
        <a aria-label="Home page" href="/">
          <svg
            aria-hidden="true"
            viewBox="0 0 36 36"
            fill="none"
            class="inline h-9 w-9"
          >
            <g
              fill="none"
              stroke="#38BDF8"
              stroke-linejoin="round"
              stroke-width="3"
            >
              <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z"></path>
              <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z"></path>
            </g>
          </svg>
          <span class="font-display ml-2 font-bold text-neutral-700">
            Jeasx &ndash; JSX with Ease
          </span>
        </a>
      </div>
      <div class="-my-5 mr-6 hidden sm:mr-8 md:mr-0 lg:block">
        <form id="search-form">
          <input
            id="search-input"
            type="search"
            name="q"
            placeholder="🔎 Search Ecosia for Jeasx related topics"
            class="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pr-3.5 md:pl-4 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-white/5 dark:md:ring-inset dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500"
          />
        </form>
      </div>
      <div class="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <div class="h-6 w-6"></div>
        <a
          class="group"
          aria-label="GitHub"
          href="https://github.com/jeasx/jeasx"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            class="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
