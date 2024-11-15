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
            for 3rd party dependencies like fastify, esbuild and esbuild.
          </p>
          <Highlight title="2024-11-15 - Jeasx 1.0.2 released">
            <p>
              🎉 Disabled cache-control for fastify-static, so proper
              Cache-Control-Headers could be applied via environment.
            </p>
          </Highlight>
          <hr />
          <h2>Release History</h2>
          <dl>
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
