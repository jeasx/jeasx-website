import IconAttention from "./icons/IconAttention";
import IconWarning from "./icons/IconWarning";

export default function Highlight({ title, warning = false, children = [] }) {
  return (
    <div
      class={
        warning
          ? "my-8 flex rounded-3xl bg-amber-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
          : "my-8 flex rounded-3xl bg-sky-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10"
      }
    >
      {warning ? <IconWarning /> : <IconAttention />}
      <div class="ml-4 flex-auto">
        <p
          class={
            warning
              ? "m-0 font-display text-xl text-amber-900 dark:text-amber-500"
              : "m-0 font-display text-xl text-sky-900 dark:text-sky-400"
          }
        >
          {title}
        </p>
        <div
          class={
            warning
              ? "prose mt-2.5 text-amber-800 [--tw-prose-background:theme(colors.amber.50)] [--tw-prose-underline:theme(colors.amber.400)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300"
              : "prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300"
          }
        >
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
