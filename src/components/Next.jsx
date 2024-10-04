export default function Next({ label, link }) {
  return (
    <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
      <div class="ml-auto text-right">
        <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
          Next
        </dt>
        <dd class="mt-1">
          <a
            class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            href={link}
          >
            {label}
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              class="h-4 w-4 flex-none fill-current"
            >
              <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
            </svg>
          </a>
        </dd>
      </div>
    </dl>
  );
}
