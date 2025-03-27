import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Faq({}) {
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
          <p class="lead">
            Welcome to the news section of Jeasx. Here we are going to post
            updates about new features, bug fixes, and general information about
            the project. We are proud to announce that Jeasx is rock stable and
            ready for production. We are committed to keep the project as small
            as possible and focus on the core. Future updates are likely updates
            for 3rd party dependencies like fastify, esbuild and pm2.
          </p>
          <Highlight title="2025-03-27 - Jeasx 1.7.0 released">
            <p>
              🎉 This release removes <code>pm2</code> as a dependency and
              utilizes the powerful file watching capabilities of{" "}
              <code>esbuild</code> directly. This enhancement significantly
              improves build performance because <code>esbuild</code> only
              re-compiles dependent files. Additionally, sharing code between
              the server and browser now works seamlessly without any additional
              configurations.
            </p>
            <p>
              As an added benefit, Jeasx now works with <code>Bun</code> as an
              alternative JavaScript runtime, although this setup is not yet
              recommended for development or production.
            </p>
            <p>Dependency updates: @types/node@22.13.14</p>
          </Highlight>
          <hr />
          <h2>Release History</h2>
          <dl>
            <dt>2025-03-26 - Jeasx 1.6.3 released</dt>
            <dd>
              <p>
                🎉 This release fixes a bug with the recently introduced env
                file loading. The env files were loaded in the wrong order, so
                that overwriting existing env variables didn't work.
              </p>
              <p>Dependency updates: fastify@5.2.2, @types/node@22.13.13</p>
            </dd>
            <dt>2025-03-19 - Jeasx 1.6.2 released</dt>
            <dd>
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
            </dd>
            <dt>2025-03-15 - Jeasx 1.6.1 released</dt>
            <dd>
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
            </dd>
            <dt>2025-03-09 - Jeasx 1.5.0 released</dt>
            <dd>
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
            </dd>
            <dt>2025-03-01 - Jeasx 1.4.1 released</dt>
            <dd>
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
            </dd>
            <dt>2025-02-12 - Jeasx 1.4.0 released</dt>
            <dd>
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
            </dd>
            <dt>2025-01-18 - Jeasx 1.3.0 released</dt>
            <dd>
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
            </dd>
          </dl>
          <dl>
            <dt>2025-01-06 - Jeasx 1.2.2 released</dt>
            <dd>
              <p>
                🎉 This release is just a minor dependency update:
                fastify@5.2.1, fastify/cookie@11.0.2 and types/node@22.10.5.
              </p>
            </dd>
            <dt>2024-12-12 - Jeasx 1.2.1 released</dt>
            <dd>
              <p>
                🎉 This release fixes a bug introduced by the recently
                introduced route caching feature: if a guard returned different
                response types (e.g. JSX code for a forbidden route, otherwise
                props for the guarded routes), the guarded routes weren't
                resolved anymore.
              </p>
            </dd>
            <dt>2024-12-07 - Jeasx 1.2.0 released</dt>
            <dd>
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
            </dd>
            <dt>2024-12-01 - Jeasx 1.1.0 released</dt>
            <dd>
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
                <code>{this.escape("&amp;amp;")}</code> two times. This release
                also removes the deprecated <code>renderToString</code>{" "}
                function. Simply replace it with <code>jsxToString</code>.
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
            </dd>
            <dt>2024-11-15 - Jeasx 1.0.2 released</dt>
            <dd>
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
            </dd>
            <dt>2024-11-01 - Jeasx 1.0.1 released</dt>
            <dd>
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
            </dd>
            <dt>2024-10-04 - Jeasx 1.0.0 released</dt>
            <dd>
              <p>
                It's finally here! Jeasx 1.0.0 is ready for production. We are
                proud to announce that the framework has reached feature
                completeness and is now ready for the masses. Lots of hours of
                work have been put into this project to make sure you have the
                best experience possible.
              </p>
            </dd>
          </dl>
          <dl>
            <dt>2024-09-23 - Jeasx 0.15.2 released</dt>
            <dd>
              <p>Updates to all @fastify-plugins and esbuild@0.24.0.</p>
            </dd>
            <dt>2024-09-21 - Jeasx 0.15.1 released</dt>
            <dd>
              <p>
                Decorate the Fastify request object with "path" property, so you
                can easily access the route path without query parameters via{" "}
                <code>request.path</code>. This solves 99% of all use-cases for
                recently removed @fastity/url-data.
              </p>
            </dd>
            <dt>2024-09-20 - Jeasx 0.15.0 released</dt>
            <dd>
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
            </dd>
            <dt>2024-08-21 - Jeasx 0.11.2 released</dt>
            <dd>
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
            </dd>
            <dt>2024-07-27 - Jeasx 0.11.1 released</dt>
            <dd>
              <p>
                Performance optimization: if response is string or buffer, break
                evaluation loop early. This allows to build caches for pages and
                binary assets in userland.
              </p>
            </dd>
            <dt>2024-07-26 - Jeasx 0.11.0 released</dt>
            <dd>
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
            </dd>
            <dt>2024-07-19 - Jeasx 0.10.1 released</dt>
            <dd>
              <p>
                <b>Breaking change:</b> removed @fastify/request-context in
                favor of the recently introduced <code>this</code> context.
                Changing your code should be straightforward. This change
                decouples userland code from Fastify. Additionally code for
                Jeasx and jsx-async-runtime is provided unminified, so debugging
                and testing is far easier now.
              </p>
            </dd>
            <dt>2024-07-12 - Jeasx 0.9.1 released</dt>
            <dd>
              <p>
                Updated to jsx-async-runtime@0.4.1 which fixes a problem when
                running tests with Vitest.
              </p>
            </dd>
            <dt>2024-07-10 - Jeasx 0.9.0 released</dt>
            <dd>
              <p>
                Updated to jsx-async-runtime@0.4.0 which allows to use 'this' as
                context object to avoid prop drilling. Have a look at the{" "}
                <a href="https://expo.jeasx.dev/context" target="_blank">
                  demo
                </a>{" "}
                to see how things work.
              </p>
            </dd>
            <dt>2024-07-05 - Jeasx 0.8.0 released</dt>
            <dd>
              <p>
                Updated to jsx-async-runtime@0.3.0 (deprecated renderToString in
                favor of jsxToString)
              </p>
            </dd>
            <dt>2024-07-03 - Jeasx 0.7.6 released</dt>
            <dd>
              <p>Updated to esbuild@0.23.0</p>
            </dd>
            <dt>2024-07-01 - Jeasx 0.7.5 released</dt>
            <dd>
              <p>Updated to fastify@4.28.1, esbuild@0.22.0, pm2@5.4.1</p>
            </dd>
            <dt>2024-05-28 - Jeasx 0.7.4 released</dt>
            <dd>
              <p>Updated to esbuild@0.21.4, pm2@5.4.0</p>
            </dd>
            <dt>2024-05-17 - Jeasx 0.7.3 released</dt>
            <dd>
              <p>Updated to esbuild@0.21.3, @types/node@20.12.12</p>
            </dd>
            <dt>2024-05-08 - Jeasx 0.7.2 released</dt>
            <dd>
              <p>
                Updated to fastify@4.27.0, esbuild@0.21.1, @fastify/static@7.0.4
              </p>
            </dd>
            <dt>2024-05-07 - Jeasx 0.7.1 released</dt>
            <dd>
              <p>Updated esbuild to 0.21.0.</p>
            </dd>
            <dt>2024-04-27 - Jeasx 0.7.0 released</dt>
            <dd>
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
            </dd>
            <dt>Shame on me...</dt>
            <dd>
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
            </dd>
            <dt>2023-12-30 - First public commit</dt>
            <dd>
              <p>
                Our Journey Begins! 🎉 Introducing Jeasx, a revolutionary web
                development framework born out of a summer experiment in 2023.
                Our mission? To simplify web development using server-rendered
                JSX as the cornerstone, bringing back the essence of the web:
                HTML, CSS, and progressive enhancing JavaScript. Join us as we
                redefine the future of web development together!
              </p>
            </dd>
          </dl>
        </Article>
      </Content>
    </Layout>
  );
}
