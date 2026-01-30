export default function Feature({
  headline,
  link,
  icon,
  children = undefined,
}) {
  return (
    <div class="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
      <div class="relative overflow-hidden rounded-xl p-6">
        {icon}
        <h2 class="font-display mt-4 text-base text-slate-900 dark:text-white">
          <a href={link}>
            <span class="absolute -inset-px rounded-xl"></span>
            {headline}
          </a>
        </h2>
        <p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {children}
        </p>
      </div>
    </div>
  );
}
