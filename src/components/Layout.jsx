/* This file is an example. Delete it at will. */

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

/**
 * @this {import("../routes/types").RouteProps}
 */
export default function Layout({
  title = "",
  description = "",
  stage = undefined,
  children = undefined,
}) {
  const path = this.request.path;
  return (
    <>
      {{ html: "<!DOCTYPE html>" }}
      <html lang="en" class="light h-full scroll-smooth antialiased">
        <head>
          <title>{title} &raquo; Jeasx - JSX with Ease</title>
          {process.env.NODE_ENV !== "development" && (
            <meta
              http-equiv="content-security-policy"
              content={`default-src 'none'; script-src 'self'${
                process.env.NODE_ENV === "development" ? " 'unsafe-inline'" : ""
              }; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' cdn.dummyjson.com; object-src 'none'; form-action 'self'; base-uri 'self'; manifest-src 'self';`}
            />
          )}
          <meta charset="utf-8" />
          <meta name="referrer" content="same-origin" />
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="canonical"
            href={`https://www.jeasx.dev${path.endsWith("/") ? path.slice(0, -1) : path}`}
          ></link>
          <link
            rel="stylesheet"
            href={`/${process.env.BUILD_TIME}/index.css`}
          />
          <script
            type="module"
            src={`/${process.env.BUILD_TIME}/index.js`}
          ></script>
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
              {children}
            </div>
          </div>
          <MobileNavigation />
        </body>
      </html>
    </>
  );
}
