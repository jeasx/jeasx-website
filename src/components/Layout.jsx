/* This file is an example. Delete it at will. */

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

/**
 * @this {import("../routes/types").RouteProps}
 */
export default function Layout({
  title,
  description,
  stage = undefined,
  category = undefined,
  headline = undefined,
  next = undefined,
  aside = undefined,
  children,
}) {
  const path = this.request.path;
  return (
    <>
      {{ html: "<!DOCTYPE html>" }}
      <html lang="en" class="light h-full scroll-smooth antialiased">
        <head>
          <title>{title} &raquo; Jeasx - JSX with Ease</title>
          <meta charset="utf-8" />
          <meta name="referrer" content="same-origin" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link
            rel="canonical"
            href={`https://www.jeasx.dev${path.endsWith("/") ? path.slice(0, -1) : path}`}
          ></link>
          <link rel="stylesheet" href={`/${process.env.BUILD_TIME}/index.css`} />
          <script type="module" src={`/${process.env.BUILD_TIME}/index.js`}></script>
        </head>
        <body class="flex min-h-full bg-white dark:bg-slate-900">
          <div class="flex w-full flex-col">
            <Header />
            {stage}
            <div class="max-w-8xl relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
              <div class="hidden lg:relative lg:block lg:flex-none">
                <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
                <div class="absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
                <div class="absolute top-28 right-0 bottom-0 hidden w-px bg-slate-800 dark:block"></div>
                <div class="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16">
                  <Navigation />
                </div>
              </div>
              <div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                <article>
                  <header class="mb-9 space-y-1">
                    {category && (
                      <p class="font-display text-sm font-medium text-sky-500">{category}</p>
                    )}
                    <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                      {headline}
                    </h1>
                  </header>
                  <div class="prose prose-slate dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-a:font-semibold prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg prose-lead:text-slate-500 lg:prose-headings:scroll-mt-[8.5rem] dark:prose-a:text-sky-400 dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400 max-w-none dark:text-slate-400 dark:[--tw-prose-background:theme(colors.slate.900)]">
                    {children}
                  </div>
                </article>
                {next}
              </div>
              {aside}
            </div>
          </div>
          <MobileNavigation />
        </body>
      </html>
    </>
  );
}
