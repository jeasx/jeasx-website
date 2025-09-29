import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import IconAttention from "../components/icons/IconAttention";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout
      title="Configuration"
      description="How to use environment variables to configure Jeasx"
    >
      <Content>
        <Article category="Configuration" headline="How to configure Jeasx">
          <Lead>
            Jeasx provides sensible defaults to get you started quickly, but it
            also allows you to override important settings with environment
            variables. This makes it easy to adapt the framework to your needs.
          </Lead>
          <p>
            To facilitate managing multiple configurations, Jeasx leverages
            layers of .env-files. This enables the use of different .env-files
            based on the NODE_ENV value, such as <code>.env.development</code>{" "}
            to override values from <code>.env</code> for development. The order
            of loading .env-files is the same as it is used by the well-known{" "}
            <a
              href="https://github.com/kerimdzhanov/dotenv-flow"
              target="_blank"
            >
              dotenv-flow
            </a>{" "}
            library. To load the env-files into <code>process.env</code>, Jeasx
            makes use of the native implementation provided by Node.js via{" "}
            <a
              href="https://nodejs.org/docs/latest/api/process.html#processloadenvfilepath"
              target="_blank"
            >
              process.loadEnvFile
            </a>{" "}
            via a custom{" "}
            <a
              href="https://github.com/jeasx/jeasx/blob/main/env.js"
              target="_blank"
            >
              utility function
            </a>
            . An existing environment variable will not be overwritten by
            subsequent files.
          </p>
          <ol>
            <li>
              .env.[NODE_ENV].local{" "}
              <i>(e.g. .env.development.local or .env.production.local)</i>
            </li>
            <li>
              .env.[NODE_ENV] <i>(e.g. .env.development or .env.production)</i>
            </li>
            <li>.env.local</li>
            <li>.env</li>
            <li>.env.defaults</li>
          </ol>
          <p>
            <b>Please note:</b> Jeasx only sets{" "}
            <code>NODE_ENV=development</code> automatically when running{" "}
            <code>jeasx dev</code>. For production or testing environments,
            you'll need to set the <code>NODE_ENV</code> environment variable to
            the desired value (e.g. <code>production</code> or <code>test</code>
            ) depending on your requirements and workflows.
          </p>
          <Highlight
            title="Environment variables for client code"
            icon={<IconAttention />}
          >
            <p>
              For security reasons, only environment variables prefixed with{" "}
              <code>BROWSER_PUBLIC_</code> are accessible in client-side
              JavaScript (<code>src/browser</code>) to prevent accidental
              exposure of sensitive data. The values are only updated at build
              time, so changes to environment variables will require a rebuild
              to take effect.
            </p>
          </Highlight>
          <h2>Environment Variables</h2>
          <table>
            <tr>
              <th style="width:30%">Name</th>
              <th style="width:70%">Description</th>
            </tr>
            <tr>
              <td id="HOST">
                <b>HOST</b>
              </td>
              <td>
                <p>
                  The hostname or IP address that the server should listen on.
                  Defaults to <code>::</code> which allows the server to listen
                  on any interface (IPv4 or IPv6).
                </p>
              </td>
            </tr>
            <tr>
              <td id="PORT">
                <b>PORT</b>
              </td>
              <td>
                <p>
                  The port number that the server should listen on. Defaults to{" "}
                  <code>3000</code>.
                </p>
              </td>
            </tr>
            <tr>
              <td id="BUILD_TIME">
                <b>BUILD_&#8203;TIME</b>
              </td>
              <td>
                <p>
                  A <b>read-only value</b> set at build time and encoded as{" "}
                  <code>base36</code> (lower case alphabet and digits). Use it
                  to create a cache busting parameter for loading JavaScript and
                  CSS files.
                </p>
              </td>
            </tr>
            <tr>
              <td id="ESBUILD_BROWSER_TARGET">
                <b>ESBUILD_&#8203;BROWSER_&#8203;TARGET</b>
              </td>
              <td>
                <p>
                  Defaults to{" "}
                  <code>chrome130, edge130, firefox130, safari18</code>, full
                  documentation at{" "}
                  <a
                    href="https://esbuild.github.io/api/#target"
                    target="_blank"
                  >
                    esbuild website
                  </a>
                  .
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_BODY_LIMIT">
                <b>FASTIFY_&#8203;BODY_&#8203;LIMIT</b>
              </td>
              <td>
                <p>
                  The default maximum body size for incoming requests (e.g.
                  <code>1048576</code> bytes). Adjust this value only if you
                  need to accommodate large file uploads.
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_DISABLE_REQUEST_LOGGING">
                <b>FASTIFY_&#8203;DISABLE_&#8203;REQUEST_&#8203;LOGGING</b>
              </td>
              <td>
                <p>Set this to true to disable request logging.</p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_REWRITE_URL">
                <b>FASTIFY_&#8203;REWRITE_&#8203;URL</b>
              </td>
              <td>
                <p>
                  If you want to rewrite incoming URLs (e.g. running behind a
                  proxy server or when you want to fake non-existing URLs), you
                  can provide a function which takes a request object and
                  returns an URL as string. To ignore a leading segment like{" "}
                  <code>/proxy/</code>, use{" "}
                  <code>{`(req) => req.url.replace(/^\\/proxy/,"")`}</code>.
                  Please have a look at the{" "}
                  <a
                    href="https://fastify.dev/docs/latest/Reference/Server/#rewriteurl"
                    target="_blank"
                  >
                    Fastify docs
                  </a>{" "}
                  for more information.
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_STATIC_HEADERS">
                <b>FASTIFY_&#8203;STATIC_&#8203;HEADERS</b>
              </td>
              <td>
                <p>
                  Custom headers for static files, such as JavaScript, CSS, and
                  assets from the public directory. Use these headers to
                  configure cache settings for static content.
                </p>
                <Code
                  lang="json"
                  source={
                    /*json*/ `
{
  "": {
    "Cache-Control":
      "public, max-age=31536000"
  },
  "robots.txt": {
    "Cache-Control":
      "public, max-age=86400"
  },
  ".html": {
    "Cache-Control":
      "public, max-age=0"
  },
}`.trim()
                  }
                />
                <p>
                  The keys of the mapping are compared via{" "}
                  <code>.endsWith()</code> with the current path, so an empty
                  string matches all paths and can be used as fallback.
                </p>
                <p>
                  <b>Please note:</b> If you set caching headers in global{" "}
                  <code>.env</code>, you should clear them in{" "}
                  <code>.env.development</code> (e.g. via{" "}
                  <code>FASTIFY_STATIC_HEADERS=</code>) to avoid caching issues
                  in development.
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_TRUST_PROXY">
                <b>FASTIFY_&#8203;TRUST_&#8203;PROXY</b>
              </td>
              <td>
                <p>
                  By enabling the{" "}
                  <a
                    href="https://fastify.dev/docs/latest/Reference/Server/#trustproxy"
                    target="_blank"
                  >
                    trustProxy
                  </a>{" "}
                  option, Fastify will know that it is sitting behind a proxy
                  and that the X-Forwarded-* header fields may be trusted, which
                  otherwise may be easily spoofed. <b>Please note:</b> the
                  option only supports boolean or string values.
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_MULTIPART_ATTACH_FIELDS_TO_BODY">
                <b>
                  FASTIFY_&#8203;MULTIPART_&#8203;ATTACH_&#8203;FIELDS_&#8203;TO_&#8203;BODY
                </b>
              </td>
              <td>
                <p>
                  The default is <code>keyValues</code>, have a look at the{" "}
                  <a href="https://github.com/fastify/fastify-multipart?tab=readme-ov-file#parse-all-fields-and-assign-them-to-the-body">
                    Fastify documentation
                  </a>{" "}
                  for more code examples and options.
                </p>
              </td>
            </tr>

            <tr>
              <td id="JEASX_ROUTE_CACHE_LIMIT">
                <b>JEASX_&#8203;ROUTE_&#8203;CACHE_&#8203;LIMIT</b>
              </td>
              <td>
                <p>
                  Jeasx employs an internal cache to enhance performance by
                  efficiently mapping routes to JavaScript modules. This option
                  allows you to set a maximum limit on the cache entries to
                  prevent excessive memory usage. A good starting point is{" "}
                  <code>10000</code>.
                </p>
                <p>
                  <b>Note:</b> If you are deploying on Vercel (which uses
                  serverless functions), using pm2 with memory limits as a
                  process manager, or have memory constraints defined for your
                  Docker containers, you typically won't need this
                  configuration. However, it is safe to include it regardless.
                </p>
              </td>
            </tr>
          </table>
        </Article>
        <Next link="/hosting" label="How to host a Jeasx application?" />
      </Content>
    </Layout>
  );
}
