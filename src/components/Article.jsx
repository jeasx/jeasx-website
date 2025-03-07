export default function Article({
  headline,
  category = undefined,
  children = undefined,
}) {
  return (
    <article>
      <header class="mb-9 space-y-1">
        {category && (
          <p class="font-display text-sm font-medium text-sky-500">
            {category}
          </p>
        )}
        <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
          {headline}
        </h1>
      </header>
      <div class="prose prose-slate dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg prose-lead:text-slate-500 lg:prose-headings:scroll-mt-[8.5rem] dark:prose-a:text-sky-400 dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400 max-w-none dark:text-slate-400 dark:[--tw-prose-background:theme(colors.slate.900)]">
        {children}
      </div>
    </article>
  );
}
