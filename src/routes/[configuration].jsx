import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import IconAttention from "../components/icons/IconAttention";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Configuration({}) {
  return (
    <Layout
      title="Config &amp; Environment"
      description="How to use environment variables to configure Jeasx"
    >
      <Content>
        <Article
          category="Config &amp; Environment"
          headline="How to configure Jeasx"
        >
          <p class="lead">
            Jeasx provides sensible defaults to get you started quickly, but it
            also allows you to override important settings with environment
            variables. This makes it easy to adapt the framework to your needs.
          </p>
          <p>
            To facilitate managing multiple configurations, Jeasx leverages{" "}
            <a
              href="https://github.com/kerimdzhanov/dotenv-flow"
              target="_blank"
            >
              dotenv-flow
            </a>{" "}
            for handling .env-files. This enables the use of different
            .env-files based on the NODE_ENV value, such as{" "}
            <code>.env.development</code> to override values from{" "}
            <code>.env</code>.
          </p>
          <p>
            <b>Please note:</b> Jeasx only sets{" "}
            <code>NODE_ENV="development"</code> automatically when running{" "}
            <code>jeasx dev</code>. For production or testing environments,
            you'll need to set the <code>NODE_ENV</code> environment variable to
            the desired value (e.g. <code>production</code> or <code>test</code>
            ) depending on your requirements and workflows.
          </p>
          <Highlight
            title="Environment variables for client and server"
            icon={<IconAttention />}
          >
            <p>
              For security reasons, only environment variables prefixed with{" "}
              <code>BROWSER_PUBLIC_</code> are accessible in client-side
              JavaScript to prevent accidental exposure of sensitive data. In
              server-side code, all environment variables are accessible
              regardless of their naming convention.
            </p>
          </Highlight>
          <h2>Environment Variables</h2>
          <table>
            <tr>
              <th width="50%">Name</th>
              <th width="50%">Description</th>
            </tr>
            <tr>
              <td>
                <b>HOST</b>
              </td>
              <td>
                The hostname or IP address that the server should listen on.
                Defaults to <code>::</code> which allows the server to listen on
                any interface (IPv4 or IPv6).
              </td>
            </tr>
            <tr>
              <td>
                <b>PORT</b>
              </td>
              <td>
                The port number that the server should listen on. Defaults to{" "}
                <code>3000</code>.
              </td>
            </tr>
            <tr>
              <td>
                <b>BUILD_TIME</b>
              </td>
              <td>
                A <b>read-only value</b> set at build time and encoded as{" "}
                <code>base36</code> (lower case alphabet and digits). Use it to
                create a cache busting parameter for loading JavaScript and CSS
                files.
              </td>
            </tr>
            <tr>
              <td>
                <b>ESBUILD_BROWSER_TARGET</b>
              </td>
              <td>
                Defaults to{" "}
                <code>chrome126, edge126, firefox128, safari17</code>, more info
                at{" "}
                <a href="https://esbuild.github.io/api/#target" target="_blank">
                  esbuild website
                </a>
                .
              </td>
            </tr>
            <tr>
              <td>
                <b>FASTIFY_BODY_LIMIT</b>
              </td>
              <td>
                The default maximum body size for incoming requests is{" "}
                <code>1048576</code> bytes. Adjust this value only if you need
                to accommodate large file uploads.
              </td>
            </tr>
            <tr>
              <td>
                <b>FASTIFY_STATIC_HEADERS</b>
              </td>
              <td>
                Custom headers for static files, such as JavaScript, CSS, and
                assets from the public directory. Use these headers to configure
                cache settings for static content.
                <Code
                  lang="json"
                  source={JSON.stringify(
                    {
                      "robots.txt": {
                        "Cache-Control":
                          "public, max-age=86400, s-maxage=86400",
                      },
                      ".html": {
                        "Cache-Control": "public, max-age=0, s-maxage=120",
                      },
                      "": {
                        "Cache-Control":
                          "public, max-age=31536000, s-maxage=31536000",
                      },
                    },
                    null,
                    2,
                  )}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>JEASX_BUILD_JS_WATCH</b>
              </td>
              <td>
                Watched directories for browser bundle. This is only needed if
                you want to share code between server and browser (e.g. set it
                to <code>src/browser,src/shared</code>).
              </td>
            </tr>
          </table>
        </Article>
      </Content>
    </Layout>
  );
}
