export default function Highlight({
  title,
  icon = undefined,
  variant = false,
  children = [],
}) {
  return (
    <div
      class={
        variant
          ? "my-8 flex rounded-3xl bg-amber-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
          : "my-8 flex rounded-3xl bg-sky-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
      }
    >
      {icon}
      <div class="ml-4 flex-auto">
        <div
          class={
            variant
              ? "font-display m-0 text-xl text-amber-900 dark:text-amber-500"
              : "font-display m-0 text-xl text-sky-900 dark:text-sky-400"
          }
        >
          {title}
        </div>
        <div
          class={
            variant
              ? "prose prose-a:text-amber-900 prose-code:text-amber-900 dark:prose-code:text-slate-300 mt-2.5 text-amber-800 [--tw-prose-background:theme(colors.amber.50)] [--tw-prose-underline:theme(colors.amber.400)] dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)]"
              : "prose prose-a:text-sky-900 prose-code:text-sky-900 dark:prose-code:text-slate-300 mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] dark:text-slate-300"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
