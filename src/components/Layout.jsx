/* This file is an example. Delete it at will. */

import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * @this {import("../routes/types").RouteProps}
 */
export default function Layout({
  title = "",
  description = "",
  children = [],
}) {
  const path = this.request.urlData().path;

  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang="en">
        <head>
          <title>{title} | JSX with Ease</title>
          {process.env.NODE_ENV !== "development" && (
            <meta
              http-equiv="content-security-policy"
              content={`default-src 'none'; script-src 'self'${
                process.env.NODE_ENV === "development" ? " 'unsafe-inline'" : ""
              }; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' cdn.dummyjson.com; object-src 'none'; form-action 'self'; base-uri 'self';`}
            />
          )}
          <meta name="referrer" content="same-origin" />
          <meta name="description" content={description} />
          <meta charset="utf-8" />
          <meta name="view-transition" content="same-origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href={`/${process.env.BUILD_TIME}/index.css`}
          />
          <script src={`/${process.env.BUILD_TIME}/index.js`} defer></script>
        </head>
        <body>
          <div id="wrapper">
            <div id="main">
              <div class="inner">
                <Header />
                {path !== "/" ? (
                  <section>
                    <header class="main">
                      <h1>{title}</h1>
                      <h2>{description}</h2>
                    </header>
                    {children}
                  </section>
                ) : (
                  children
                )}
              </div>
            </div>
            <Sidebar />
          </div>
        </body>
      </html>
    </>
  );
}
