/* This file is an example. Delete it at will. */

import { requestContext } from "@fastify/request-context";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({
  title = "",
  description = "",
  children = [],
}) {
  const path = requestContext.get("request").urlData().path;

  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang="en">
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href={`/index.css?${process.env.BUILD_TIME}`}
          />
          <script src={`/index.js?${process.env.BUILD_TIME}`} defer></script>
        </head>
        <body>
          <div id="wrapper">
            <div id="main">
              <div class="inner">
                <Header />
                {children}
              </div>
            </div>
            <Sidebar />
          </div>
        </body>
      </html>
    </>
  );
}