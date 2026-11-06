import { html } from "jsx-async-runtime";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

/**
 * @this {import("../types").RouteProps}
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
  const url = `https://www.jeasx.dev${path.endsWith("/") ? path.slice(0, -1) : path}`;
  const fullTitle = `${title} » Jeasx - JSX with Ease`;
  return (
    <>
      {html("<!DOCTYPE html>")}
      <html lang="en">
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
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9" />
          <link rel="canonical" href={url}></link>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Jeasx" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={fullTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://www.jeasx.dev/og-image.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Jeasx - JSX with Ease" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={fullTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://www.jeasx.dev/og-image.png" />
          <meta name="twitter:image:alt" content="Jeasx - JSX with Ease" />
          <link rel="stylesheet" href={`/index~${process.env.BUILD_ID}.css`} />
          <script type="module" src={`/index~${process.env.BUILD_ID}.js`}></script>
          <link
            rel="stylesheet"
            href={`/pagefind/pagefind-component-ui.css?${process.env.BUILD_ID}`}
          />
          <script
            type="module"
            src={`/pagefind/pagefind-component-ui.js?${process.env.BUILD_ID}`}
          ></script>
        </head>
        <body>
          <div class="page">
            <Header />
            {stage}
            <div class="main">
              <div class="sidebar">
                <div class="sidebar-background"></div>
                <div class="sidebar-content">
                  <Navigation />
                </div>
              </div>
              <div class="content">
                <article>
                  <header class="page-header">
                    {category && <p class="page-category">{category}</p>}
                    <h1 class="page-title">{headline}</h1>
                  </header>
                  <div class="prose">{children}</div>
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
