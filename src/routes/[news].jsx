import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Definition from "../components/Definition";
import Definitions from "../components/Definitions";
import Highlight from "../components/Highlight";
import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout
      title="News"
      description="What are the latest updates and new features in Jeasx?"
    >
      <Content>
        <Article
          category="News"
          headline="What are the latest updates and new features in Jeasx?"
        >
          <Lead>
            Welcome to the news section of Jeasx. Here we are going to post
            updates about new features, bug fixes, and general information about
            the project.
          </Lead>
          <Highlight title="2025-11-10 - Jeasx 2.1.1 released">
            <p>
              🎉 Enhanced configuration for @fastify/static, so you can serve
              pre-compressed static files (see{" "}
              <a href="https://github.com/fastify/fastify-static?tab=readme-ov-file#precompressed">
                @fastify/static docs
              </a>
              ) from <code>public</code> and <code>dist/browser</code>. Just run{" "}
              <code>gzip -rk public dist/browser</code> as post build for
              gzipping your static assets. This might be useful if you don't
              want to run a reverse proxy in front of your Jeasx application and
              serve compressed files nevertheless.
            </p>
            <p>
              Setting up compression for dynamic content can be wired up in
              userland via a root guard:
            </p>
            <Code
              lang="js"
              source={
                /*js*/ `
import { promisify } from "node:util";
import { gzip } from "node:zlib";

export default function ({ request, reply }) {
  this.responseHandler = (payload) => {
    if (
      typeof payload === "string" &&
      request.headers["accept-encoding"]?.includes("gzip")
    ) {
      reply.header("content-encoding", "gzip");
      return promisify(gzip)(payload);
    } else {
      return payload;
    }
  };
}
`.trim()
              }
            />
            <p>
              Updated <code>moduleResolution</code> to <code>bundler</code> in{" "}
              <code>tsconfig.json</code>.
            </p>
            <p>
              Dependency updates: <code>jsx-async-runtime@2.0.1</code>,{" "}
              <code>fastify@5.6.2</code>,<code>esbuild@0.27.0</code>,{" "}
              <code>@types/node@24.9.2</code>
            </p>
          </Highlight>
          <hr />
          <h2>Release History</h2>
          <Definitions>
            <Definition title="2025-10-28 - Jeasx 2.1.0 released">
              <p>
                🎉 Environment vars can now be loaded from a JavaScript file (
                <code>.env.js</code>) additionally to existing <code>.env</code>
                -files. This allows enhanced environment setups depending on
                your workflows. <a href="/configuration">Read more...</a>
              </p>
              <p>Node 24 (LTS) is the official default runtime from now on.</p>
              <p>
                Dependency updates: @fastify/multipart@9.3.0,
                @fastify/static@8.3.0, @types/node@24.9.1
              </p>
            </Definition>
            <Definition title="2025-10-15 - Jeasx 2.0.1 released">
              <p>
                This releases fixes status codes for fallback 404 routes. Due to
                an unnoticed bug introduced by a minor refactoring, 404-routes
                were delivered with <code>status=200</code>, now it is the
                correct <code>status=404</code> again. This might impact your
                SEO score, so an update is highly recommended.
              </p>
              <p>Dependency updates: esbuild@0.25.11</p>
            </Definition>
            <Definition title="2025-10-12 - Jeasx 2.0.0 released">
              <p>
                🎉 Approximately one year after the release of Jeasx 1.0 I'm
                proud to announce the release of Jeasx 2.0. It's a funny
                story... every time I think Jeasx is feature-complete, there is
                still some more room to improve. Although the main idea behind
                Jeasx development still holds true: focus on a lean and stable
                core and let developers do all their magic in userland.
              </p>
              <p>
                This release is focused on security and comes with a{" "}
                <b>major breaking change:</b> all HTML markup is escaped by
                default from now on, so you don't have to escape dangerous user
                input on your own anymore. This way the developer experience is
                improved and the actual performance costs for automatic escaping
                are neglible due to the reuse of the highly optimized{" "}
                <a href="https://github.com/SukkaW/fast-escape-html">
                  fast-escape-html
                </a>{" "}
                library.
              </p>
              <p>
                If you need to include literal HTML in your JSX templates (e.g.
                HTML snippets from a CMS), you can use a special object syntax
                to opt out of escaping:{" "}
                <code>{
                  /*jsx*/ `{{ html: "<p>Some HTML from a CMS</p>" }}`
                }</code>
              </p>
              <p>
                If you want to migrate from Jeasx 1.0 to Jeasx 2.0 with
                automatic HTML escaping enabled, you'll need to remove all calls
                to <code>#escapeEntities()</code> and modify the HTML
                declaration in your layouts (
                <code>{`{{ html: "<!DOCTYPE html>" }}`}</code>). Then you should
                check where you need to render literal HTML (or other code) and
                apply the required changes to opt out of escaping (e.g.{" "}
                <code>{`<div>{ wysiwygContent }</div>`}</code> to{" "}
                <code>{`<div>{{ html: wysiwygContent }}</div>`}</code>).
              </p>
              <p>
                If you want to restore the non-escaping behaviour of Jeasx &lt;
                v2, you can set <code>jsxEscapeHTML = false</code> in the root
                guard. This way HTML escaping is disabled globally.
              </p>
              <p>
                Another internal change is the renaming of the directories in
                the output directory (<code>dist</code>): <code>routes</code> is
                now called <code>server</code> alongside the{" "}
                <code>browser</code> directory.
              </p>
              <p>
                Dependency updates: jsx-async-runtime@2.0.0,
                @types/node@22.18.10
              </p>
            </Definition>
            <Definition title="2025-09-29 - Jeasx 1.9.0 released">
              <p>
                🎉 This release drops the constraint that you had to put all
                routes into a dedicated <code>routes</code>-directory and all
                JavaScript &amp; CSS into a dedicated <code>browser</code>
                -directory. From now on you can use any directory layout in your
                projects as you like. You can still use the proven{" "}
                <code>browser/routes</code> layout, but you don't have to.
              </p>
              <p>
                This feature enables the co-location of server and browser code
                in the same directory which might be a better default for your
                workflows.
              </p>
              <p>
                The only remaining constraint is to mark server routes with
                brackets (e.g. <code>[news].jsx</code>) and browser-bundled
                assets as index-files (e.g. <code>index.js</code> or{" "}
                <code>index.css</code>).
              </p>
              <p>
                <b>Please note:</b> This feature is enabled by dropping the hard
                coded outbase-directories in the esbuild configuration. If the
                outbase directory isn't specified, it defaults to the lowest
                common ancestor directory among all input entry point paths.
              </p>
              <p>
                If you run into an edge case (e.g. your browser bundles won't
                load anymore), here's how to fix it: if you store all your
                assets in <code>browser/assets</code> and request your assets
                via <code>/assets/...</code>, this won't work anymore, because{" "}
                <code>assets</code> is now the lowest common ancestor directory
                and is removed by esbuild. Simple fix: just put an empty{" "}
                <code>index.js</code> into <code>browser</code> directory, so
                this directory is lowest common ancestor directory again.
              </p>
              <p>
                Bumbed the default <code>ESBUILD_BROWSER_TARGET</code> to{" "}
                <code>"chrome130", "edge130", "firefox130", "safari18"</code>.
              </p>
              <p>
                Dependency updates: fastify@5.6.1, esbuild@0.25.10,
                @types/node@22.18.6
              </p>
            </Definition>
            <Definition title="2025-09-11 - Jeasx 1.8.6 released">
              <p>
                🎉 This release bumps dependencies to the latest and greatest
                versions.
              </p>
              <p>
                Dependency updates: fastify@5.6.0, fastify/multipart@9.2.1,
                @types/node@22.18.1
              </p>
            </Definition>
            <Definition title="2025-08-13 - Jeasx 1.8.5 released">
              <p>
                🎉 This release bumps dependencies to the latest and greatest
                versions.
              </p>
              <p>
                Dependency updates: fastify@5.5.0, jsx-async-runtime@1.0.4,
                esbuild@0.25.9, @types/node@22.17.1
              </p>
            </Definition>
            <Definition title="2025-08-03 - Jeasx 1.8.4 released">
              <p>
                🎉 This release bumps dependencies to the latest and greatest
                versions.
              </p>
              <p>Dependency updates: esbuild@0.25.8, @types/node@22.17.0</p>
            </Definition>
            <Definition title="2025-07-11 - Jeasx 1.8.3 released">
              <p>
                🎉 This release bumps dependencies to the latest and greatest
                versions.
              </p>
              <p>
                Dependency updates: jsx-async-runtime@1.0.3, esbuild@0.25.6,
                @types/node@22.16.3
              </p>
            </Definition>
            <Definition title="2025-06-13 - Jeasx 1.8.2 released">
              <p>
                🎉 This release changes the default options for
                @fastify/multipart. From now on the default for{" "}
                <code>attachFieldsToBody</code> is <code>keyValues</code> which
                provides all data for form body requests (e.g. uploads) directly
                via <code>request.body</code>. Have a look at the{" "}
                <a href="https://github.com/fastify/fastify-multipart?tab=readme-ov-file#parse-all-fields-and-assign-them-to-the-body">
                  Fastify documentation
                </a>{" "}
                for code examples and options.
              </p>
              <p>
                This change makes the required code for handling form body
                requests much easier:
                <Code
                  lang="jsx"
                  source={
                    /*js*/ `
// Change this code...
const file = await request.file();
const upload = await file.toBuffer()
const format = file.fields["format"]["value"];

// ... to this code.
const upload = request.body["upload"];
const format = request.body["format"];
`.trim()
                  }
                />
              </p>
              <p>
                <b>Please note:</b> This change might break your code. If you
                want to revert to the old behaviour, you can set the following
                environment variable:{" "}
                <code>
                  FASTIFY_&#8203;MULTIPART_&#8203;ATTACH_&#8203;FIELDS_&#8203;TO_&#8203;BODY=false
                </code>
              </p>
              <p>Dependency updates: fastify@5.4.0, @types/node@22.15.31</p>
            </Definition>
            <Definition title="2025-05-28 - Jeasx 1.8.1 released">
              <p>🎉 Just some dependency updates...</p>
              <p>
                Dependency updates: jsx-async-runtime@1.0.2, fastify@5.3.3,
                fastify/static@8.2.0, esbuild@0.25.5, @types/node@22.15.23
              </p>
            </Definition>
            <Definition title="2025-05-12 - Jeasx 1.8.0 released">
              <p>
                🎉 This release introduces a custom error handler to provide
                user-friendly error messages for internal server errors and to
                facilitate team notifications.
              </p>
              <p>
                To set up an error handler, simply register it in a route of
                your choice:
              </p>
              <Code
                source={
                  /*js*/ `this.errorHandler = async (error) => {
  console.error("❌", error);
  return <h1>Internal error</h1>;
}`.trim()
                }
              />
              <p>
                An error handler is called with <code>this</code> as context,
                allowing easy access to your context setup.
              </p>
              <p>
                <b>Breaking change:</b> If you use a response handler, you'll
                need to change the name from <code>this.response</code> to{" "}
                <code>this.responseHandler</code>. This aligns the response
                handler with the introduced error handler. We apologize for any
                inconvenience, but since this is a seldom-used feature, we aim
                to streamline the codebase by aligning it without maintaining
                deprecated code.
              </p>
              <p>
                As additional feature, a response handler is now called with{" "}
                <code>this</code> as the context, so you can access your
                existing context.
              </p>
              <p>Dependency updates: esbuild@0.25.4, @types/node@22.15.17</p>
            </Definition>
            <Definition title="2025-05-03 - Jeasx 1.7.3 released">
              <p>
                🎉 This release introduces a performance improvement by
                switching the internal route-to-module cache implementation from
                a JavaScript object to a <code>Map</code>. This change allows
                for better management of cache entries, enabling the
                configuration of a maximum cache limit. To take advantage of
                this, a new configuration option
                <code>JEASX_ROUTE_CACHE_LIMIT</code> has been added.{" "}
                <a href="/configuration#JEASX_ROUTE_CACHE_LIMIT">
                  Read more...
                </a>
              </p>
              <p>
                Dependency updates: jsx-async-runtime@1.0.1, esbuild@0.25.3,
                @types/node@22.15.3
              </p>
            </Definition>
            <Definition title="2025-04-21 - Jeasx 1.7.2 released">
              <p>🎉 This release is brings only minor changes:</p>
              <ul>
                <li>
                  <b>FASTIFY_STATIC_HEADERS:</b> Apply all matching headers to
                  the current path. Use an empty string ("") as first rule to
                  set default headers, which can be overridden by more specific
                  rules later. Please checkout the updated{" "}
                  <a href="/configuration#FASTIFY_STATIC_HEADERS">
                    configuration
                  </a>
                  .
                  <br />
                  <b>Please note:</b> You may need to adjust your existing
                  configuration by moving the wildcard rule to the top of the
                  JSON file to ensure it can be overridden by more specific
                  rules defined below.
                </li>
                <li>
                  <b>env.sh:</b> Removed logging of loaded environment files.
                  Minor refactoring to clean up the code.
                </li>
              </ul>
              <p>Dependency updates: fastify@5.3.2, @types/node@22.14.1</p>
            </Definition>
            <Definition title="2025-03-31 - Jeasx 1.7.1 released">
              <p>
                🎉 This release enhances support for{" "}
                <a href="https://bun.sh" target="_blank">
                  Bun
                </a>{" "}
                as an alternative JavaScript runtime for both development and
                production. Use <code>bun -b dev</code> to start development
                with Jeasx and Bun. With Bun 1.2.8, the entire{" "}
                <a href="https://bun.jeasx.dev" target="_blank">
                  Jeasx expo
                </a>{" "}
                functions without any issues. While Node.js remains the primary
                focus of the project, Bun support will continue to improve.
                Having multiple options is always beneficial.
              </p>
              <p>
                Route loading in development has been enhanced. It now relies on
                the modification time of the module, eliminating the need to
                calculate a hash for the file content. Additionally, a redundant
                file existence check for route handlers has been removed,
                resulting in more streamlined core code.
              </p>
              <p>
                From now on, source maps for <code>serverless.js</code> are
                provided to enhance debugging.
              </p>
              <p>Dependency updates: esbuild@0.25.2</p>
            </Definition>
            <Definition title="2025-03-27 - Jeasx 1.7.0 released">
              <p>
                🎉 This release removes <code>pm2</code> as a dependency and
                utilizes the powerful file watching capabilities of{" "}
                <code>esbuild</code> directly. This enhancement significantly
                improves build performance because <code>esbuild</code> only
                re-compiles linked files. Additionally, sharing code between the
                server and browser now works seamlessly without any additional
                configurations.
              </p>
              <p>
                As an added benefit, Jeasx now works with <code>Bun</code> as an
                alternative JavaScript runtime, although this setup is not yet
                recommended for development or production.
              </p>
              <p>Dependency updates: @types/node@22.13.14</p>
            </Definition>
            <Definition title="2025-03-26 - Jeasx 1.6.3 released">
              <p>
                🎉 This release fixes a bug with the recently introduced env
                file loading. The env files were loaded in the wrong order, so
                that overwriting existing env variables didn't work.
              </p>
              <p>Dependency updates: fastify@5.2.2, @types/node@22.13.13</p>
            </Definition>
            <Definition title="2025-03-19 - Jeasx 1.6.2 released">
              <p>
                🎉 This release introduces a try/catch block in the central
                request handler, ensuring that proper error messages are logged.
                Additionally, it enables sourcemaps for both server and browser
                code, making debugging a breeze.
              </p>
              <p>
                To enable sourcemap support for Node.js, add the following code
                to the root of your project as a <code>.npmrc</code> file:
                <Code lang="ini" source="node-options=--enable-source-maps" />
              </p>
              <p>
                If you are using Docker, you need to modify the following lines
                in your Dockerfile to enable support for <code>.npmrc</code>:
              </p>
              <Code
                lang="docker"
                source={`# RUN npx jeasx build\nRUN npm run build\n# CMD ["npx","jeasx","start"]\nCMD ["npm","start"]`}
              />
            </Definition>
            <Definition title="2025-03-15 - Jeasx 1.6.1 released">
              <p>
                🎉 This releases replaces the dependency on{" "}
                <code>dotenv-flow</code> with a native implementation provided
                by Node.js (using{" "}
                <a
                  href="https://nodejs.org/docs/latest/api/process.html#processloadenvfilepath"
                  target="_blank"
                >
                  process.loadEnvFile
                </a>{" "}
                introduced with Node v20.12.0) to load environment variables
                from .env-files. The order of loading .env-files is the same as
                before:
                <ol>
                  <li>.env.defaults</li>
                  <li>.env</li>
                  <li>.env.local</li>
                  <li>
                    .env.[NODE_ENV]{" "}
                    <i>(e.g. .env.development or .env.production)</i>
                  </li>
                  <li>
                    .env.[NODE_ENV].local{" "}
                    <i>
                      (e.g. .env.development.local or .env.production.local)
                    </i>
                  </li>
                </ol>
              </p>
              <p>
                <b>Breaking change:</b> If you use .env-files to configure Jeasx
                and deploy to Vercel, please update your{" "}
                <code>vercel.json</code>. You'll need to change{" "}
                <code>{`"includeFiles": "{node_modules,dist,public}/**/*"`}</code>{" "}
                to <code>{`"includeFiles": "./**/*"`}</code>
                to make sure Vercel includes the .env-files in the deployment.
              </p>
              <p>
                Additionally a fix for correctly parsing environment variables
                to configure Fastify (
                <code>
                  FASTIFY_DISABLE_REQUEST_LOGGING, FASTIFY_TRUST_PROXY
                </code>
                ) was implemented.
              </p>
              <p>
                Dependency updates: jsx-async-runtime@1.0.0, esbuild@0.25.1,
                pm2@6.0.5
              </p>
              <p>
                <b>Please note:</b> version 1.6.0 was unpublished from NPM right
                after the release due to a mistake.
              </p>
            </Definition>
            <Definition title="2025-03-09 - Jeasx 1.5.0 released">
              <p>🎉 This release features two new configurations:</p>
              <ul>
                <li>
                  <code>FASTIFY_REWRITE_URL</code> allows you to rewrite
                  incoming URLs. Useful when running behind proxies or when you
                  want to fake URLs.
                </li>
                <li>
                  <code>JEASX_BUILD_ROUTES_IGNORE_WATCH</code> allows watching
                  for changes in <code>src/browser</code> when importing browser
                  code into server code.
                </li>
              </ul>
              <p>Dependency updates: @types/node@22.13.10.</p>
            </Definition>
            <Definition title="2025-03-01 - Jeasx 1.4.1 released">
              <p>
                🎉 This release features an updated{" "}
                <code>jsx-async-runtime@0.8.1</code> which brings typings for
                SVGs for a better developer experience in the IDE of your
                choice.
              </p>
              <p>
                3rd-party dependencies were updated to the latest versions:
                @fastify/static@8.1.1, @types/node@22.13.5
              </p>
            </Definition>
            <Definition title="2025-02-12 - Jeasx 1.4.0 released">
              <p>
                🎉 This release adds the <code>route</code> property to the
                current endpoint handler (e.g., <code>/[index]</code> or{" "}
                <code>/bar/[...path]</code>) to the request object (accessible
                via <code>request.route</code>). This makes it much easier to
                calculate trailing path segments for wildcard routes.
              </p>
              <p>
                Also several dependencies were updated to the latest versions:
                esbuild@0.25.0, @fastify/static@8.1.0, @fastify/multipart@9.0.3,
                @fastify/formbody@8.0.3, @types/node@22.13.1
              </p>
            </Definition>
            <Definition title="2025-01-18 - Jeasx 1.3.0 released">
              <p>
                🎉 We are excited to announce the release of{" "}
                <a
                  href="https://github.com/jeasx/jsx-async-runtime"
                  target="_blank"
                >
                  jsx-async-runtime@0.7.1
                </a>
                , which now includes proper typings for all HTML attributes in
                accordance with the{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference"
                  target="_blank"
                >
                  Mozilla Developer Network
                </a>
                . This ensures that code completion in your IDE for all HTML
                attributes works now as expected in Jeasx. Special thanks to
                Rebecca for highlighting{" "}
                <a
                  href="https://github.com/jeasx/jsx-async-runtime/issues/5"
                  target="_blank"
                >
                  this issue!
                </a>
              </p>
              <p>
                The updated version of jsx-async-runtime now supports using an
                array of strings for the <code>class</code> attribute, making it
                easier to create complex classnames. You can now construct
                classnames using plain strings or template strings, an array of
                strings, or an object, covering most use-cases known from other
                libraries like classnames.
              </p>
              <p>
                As always, we've updated to the latest versions of our
                dependencies: fastify/formbody@8.0.2, fastify/multipart@9.0.2,
                fastify/static@8.0.4, and types/node@22.10.7.
              </p>
            </Definition>
            <Definition title="2025-01-06 - Jeasx 1.2.2 released">
              <p>
                🎉 This release is just a minor dependency update:
                fastify@5.2.1, fastify/cookie@11.0.2 and types/node@22.10.5.
              </p>
            </Definition>
            <Definition title="2024-12-12 - Jeasx 1.2.1 released">
              <p>
                🎉 This release fixes a bug introduced by the recently
                introduced route caching feature: if a guard returned different
                response types (e.g. JSX code for a forbidden route, otherwise
                props for the guarded routes), the guarded routes weren't
                resolved anymore.
              </p>
            </Definition>
            <Definition title="2024-12-07 - Jeasx 1.2.0 released">
              <p>
                🎉 This release brings a major performance boost (
                <b>about 2-5 times faster in benchmarks</b>) by introducing
                runtime caches for resolved routes and loaded JavaScript
                modules. The caches are only used in production and won't
                interfere with your development workflow. This change was
                triggered by a{" "}
                <a href="https://github.com/jeasx/jeasx/pull/8">
                  PR submitted by Bryce
                </a>
                , Kudos to him for bringing this topic onto the radar.
              </p>
              <p>
                It also features an update to <code>jsx-async-runtime</code>{" "}
                which provides more accurate and also deprecated typings for
                HTML tags and attributes according to the fantastic{" "}
                <a
                  href="https://developer.mozilla.org/de/docs/Web/HTML"
                  target="_blank"
                >
                  HTML reference
                </a>{" "}
                from the Mozilla Development Network.
              </p>
              <p>
                Added two new environment variables (
                <code>FASTIFY_DISABLE_REQUEST_LOGGING</code> and{" "}
                <code>FASTIFY_TRUST_PROXY</code>) to give you more control over
                how Jeasx should behave in different environments.
              </p>
            </Definition>
            <Definition title="2024-12-01 - Jeasx 1.1.0 released">
              <p>
                🎉 Migrated from <code>dotenv</code> to{" "}
                <a
                  href="https://github.com/kerimdzhanov/dotenv-flow"
                  target="_blank"
                >
                  dotenv-flow
                </a>
                , so you can use <code>NODE_ENV</code>-specific{" "}
                <code>.env*</code> files (like <code>.env.development</code>) to
                configure different environments for production and development.
                This is useful to disable caching headers (e.g. via{" "}
                <code>FASTIFY_STATIC_HEADERS</code>) in development, as Jeasx
                applies <code>FASTIFY_STATIC_HEADERS</code> in development from
                now on for a more consistent developer expierence. See updated
                .env-files in the{" "}
                <a
                  href="https://github.com/jeasx/jeasx-quickstart"
                  target="_blank"
                >
                  quickstart-project
                </a>{" "}
                for an example how to disable caching in development. This is
                only needed if you have configured{" "}
                <code>FASTIFY_STATIC_HEADERS</code> for your existing projects.
              </p>
              <p>
                Bumped default environment variable{" "}
                <code>ESBUILD_BROWSER_TARGET</code> to more recent browser
                versions (e.g.{" "}
                <code>chrome126, edge126, firefox128, safari17</code>). If you
                want to stick with older versions, you can override it via the
                environment. Learn more about possible values at the{" "}
                <a href="https://esbuild.github.io/api/#target" target="_blank">
                  esbuild website.
                </a>
              </p>
              <p>
                Updated <code>jsx-async-runtime</code> which fixes a bug in{" "}
                <code>escapeEntities</code> which escaped existing{" "}
                <code>&amp;amp;</code> two times. This release also removes the
                deprecated <code>renderToString</code> function. Simply replace
                it with <code>jsxToString</code>.
              </p>
              <p>
                The default host is now <code>::</code> which binds to all
                available network interfaces (e.g. IPv6). You can change it via
                the <code>HOST</code> environment variable (e.g.{" "}
                <code>HOST=0.0.0.0</code> for the old behaviour). The change is
                especially useful to connect to Jeasx via private networking on
                hosting platforms like{" "}
                <a href="https://railway.app/" target="blank">
                  Railway
                </a>
                .
              </p>
            </Definition>
            <Definition title="2024-11-15 - Jeasx 1.0.2 released">
              <p>
                🎉 Disabled cache-control for fastify-static, so proper
                Cache-Control response header could be applied via the
                environment variable <code>FASTIFY_STATIC_HEADERS</code>. Have a
                look at the env-file in the{" "}
                <a
                  href="https://github.com/jeasx/jeasx-quickstart/blob/main/.env#L6-L8"
                  target="_blank"
                >
                  quickstart project
                </a>{" "}
                for an example.
              </p>
            </Definition>
            <Definition title="2024-11-01 - Jeasx 1.0.1 released">
              <p>
                🎉 This version brings official support for Node 22. Also
                dependencies were updated to latest versions of fastify@5.0.1,
                fastify/static@8.0.2 and fastify/cookie@11.0.1. Added new
                examples for{" "}
                <a href="https://expo.jeasx.dev/fragments" target="_blank">
                  template fragments
                </a>{" "}
                in combination with HTMX and{" "}
                <a href="https://expo.jeasx.dev/sharp" target="_blank">
                  image optimization
                </a>{" "}
                with sharp.
              </p>
            </Definition>
            <Definition title="2024-10-04 - Jeasx 1.0.0 released">
              <p>
                It's finally here! Jeasx 1.0.0 is ready for production. We are
                proud to announce that the framework has reached feature
                completeness and is now ready for the masses. Lots of hours of
                work have been put into this project to make sure you have the
                best experience possible.
              </p>
            </Definition>
            <Definition title="2024-09-23 - Jeasx 0.15.2 released">
              <p>Updates to all @fastify-plugins and esbuild@0.24.0.</p>
            </Definition>
            <Definition title="2024-09-21 - Jeasx 0.15.1 released">
              <p>
                Decorate the Fastify request object with "path" property, so you
                can easily access the route path without query parameters via{" "}
                <code>request.path</code>. This solves 99% of all use-cases for
                recently removed @fastity/url-data.
              </p>
            </Definition>
            <Definition title="2024-09-20 - Jeasx 0.15.0 released">
              <p>
                This release comes with Fastify 5. It also removes
                @fastify/url-data and @fastify/accepts as dependencies,
                therefore your <b>code might break.</b> The reason behind this
                removal is to depend on less dependencies in the long run which
                makes maintenance of the core easier.
              </p>
              <p>
                If you rely on either accepts or url-data, you must provide
                appropriate changes in userland code. For @fastify/url-data I
                would recommend to use{" "}
                <a href="https://github.com/fastify/fast-uri" target="_blank">
                  fast-uri
                </a>{" "}
                and for @fastify/accepts{" "}
                <a href="https://github.com/jshttp/accepts" target="_blank">
                  jshttp/accepts
                </a>{" "}
                for parsing accept-header if needed.
              </p>
              <p>
                Please note: there were some intermediate releases since the
                past proper release which shouldn't be used (and are mostly
                unpublished from npm).
              </p>
            </Definition>
            <Definition title="2024-08-21 - Jeasx 0.11.2 released">
              <p>
                Added simple{" "}
                <a
                  href="https://github.com/jeasx/jeasx-quickstart/blob/main/Dockerfile"
                  target="_blank"
                >
                  Dockerfile
                </a>{" "}
                to quickstart template. Dependency updates: esbuild@0.23.1,
                @fastify/cookie@9.4.0, @types/node@20.16.1
              </p>
            </Definition>
            <Definition title="2024-07-27 - Jeasx 0.11.1 released">
              <p>
                Performance optimization: if response is string or buffer, break
                evaluation loop early. This allows to build caches for pages and
                binary assets in userland.
              </p>
            </Definition>
            <Definition title="2024-07-26 - Jeasx 0.11.0 released">
              <p>
                Updated to jsx-async-runtime@0.5.0 which allows to override{" "}
                <code>jsxToString</code> from{" "}
                <a
                  href="https://github.com/jeasx/jsx-async-runtime"
                  target="_blank"
                >
                  jsx-async-runtime
                </a>{" "}
                to intercept / modify / replace JSX components via{" "}
                <code>this</code> context. Have a look at the{" "}
                <a href="https://expo.jeasx.dev/interceptor" target="_blank">
                  example
                </a>{" "}
                to see how it works.
              </p>
            </Definition>
            <Definition title="2024-07-19 - Jeasx 0.10.1 released">
              <p>
                <b>Breaking change:</b> removed @fastify/request-context in
                favor of the recently introduced <code>this</code> context.
                Changing your code should be straightforward. This change
                decouples userland code from Fastify. Additionally code for
                Jeasx and jsx-async-runtime is provided unminified, so debugging
                and testing is far easier now.
              </p>
            </Definition>
            <Definition title="2024-07-12 - Jeasx 0.9.1 released">
              <p>
                Updated to jsx-async-runtime@0.4.1 which fixes a problem when
                running tests with Vitest.
              </p>
            </Definition>
            <Definition title="2024-07-10 - Jeasx 0.9.0 released">
              <p>
                Updated to jsx-async-runtime@0.4.0 which allows to use 'this' as
                context object to avoid prop drilling. Have a look at the{" "}
                <a href="https://expo.jeasx.dev/context" target="_blank">
                  demo
                </a>{" "}
                to see how things work.
              </p>
            </Definition>
            <Definition title="2024-07-05 - Jeasx 0.8.0 released">
              <p>
                Updated to jsx-async-runtime@0.3.0 (deprecated renderToString in
                favor of jsxToString)
              </p>
            </Definition>
            <Definition title="2024-07-03 - Jeasx 0.7.6 released">
              <p>Updated to esbuild@0.23.0</p>
            </Definition>
            <Definition title="2024-07-01 - Jeasx 0.7.5 released">
              <p>Updated to fastify@4.28.1, esbuild@0.22.0, pm2@5.4.1</p>
            </Definition>
            <Definition title="2024-05-28 - Jeasx 0.7.4 released">
              <p>Updated to esbuild@0.21.4, pm2@5.4.0</p>
            </Definition>
            <Definition title="2024-05-17 - Jeasx 0.7.3 released">
              <p>Updated to esbuild@0.21.3, @types/node@20.12.12</p>
            </Definition>
            <Definition title="2024-05-08 - Jeasx 0.7.2 released">
              <p>
                Updated to fastify@4.27.0, esbuild@0.21.1, @fastify/static@7.0.4
              </p>
            </Definition>
            <Definition title="2024-05-07 - Jeasx 0.7.1 released">
              <p>Updated esbuild to 0.21.0.</p>
            </Definition>
            <Definition title="2024-04-27 - Jeasx 0.7.0 released">
              <p>
                This release introduces a new feature that allows you to
                post-process the resulting payloads, such as prettifying the
                HTML output. You can now set up a response handler, for example,
                in a guard. The response handler takes the resulting payload as
                a parameter and returns the modified payload.
              </p>
              <Code
                source={`
import * as prettier from "prettier";
...
export default function RootGuard({ request, reply }) {
  this.response = async (payload) => {
    return typeof payload === "string" &&
      String(reply.getHeader("content-type")).startsWith("text/html")
      ? await prettier.format(payload, { parser: "html" })
      : payload;
  };
}
`}
              />
            </Definition>
            <Definition title="Shame on me...">
              <p>
                I have recently started writing news as we approach the 1.0
                release. But you can study the{" "}
                <a
                  href="https://github.com/jeasx/jeasx/commits/main/"
                  target="_blank"
                >
                  changelog
                </a>{" "}
                at GitHub to see what has happend in the past.
              </p>
            </Definition>
            <Definition title="2023-12-30 - First public commit">
              <p>
                Our Journey Begins! 🎉 Introducing Jeasx, a revolutionary web
                development framework born out of a summer experiment in 2023.
                Our mission? To simplify web development using server-rendered
                JSX as the cornerstone, bringing back the essence of the web:
                HTML, CSS, and progressive enhancing JavaScript. Join us as we
                redefine the future of web development together!
              </p>
            </Definition>
          </Definitions>
        </Article>
      </Content>
    </Layout>
  );
}
