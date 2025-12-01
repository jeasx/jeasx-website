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
            <li>.env.js</li>
          </ol>
          <p>
            <b>Please note:</b> Jeasx only sets{" "}
            <code>NODE_ENV=development</code> automatically when running{" "}
            <code>jeasx dev</code>. For production or testing environments,
            you'll need to set the <code>NODE_ENV</code> environment variable to
            the desired value (e.g. <code>production</code> or <code>test</code>
            ) depending on your requirements and workflows.
          </p>
          <p>
            The last environment file which may be optionally loaded is a
            JavaScript file which must export an default object containing the
            environment variables. Only variables which are not already set,
            will be populated into the environment. Here is an example{" "}
            <code>.env.js</code> file:
          </p>
          <Code
            lang="js"
            source={
              /*js*/ `const NODE_ENV_IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export default {
  ESBUILD_BROWSER_TARGET: "chrome130,edge130,firefox130,safari18",

  /** @type import("fastify").FastifyServerOptions */
  FASTIFY_SERVER_OPTIONS: {
    disableRequestLogging: NODE_ENV_IS_DEVELOPMENT,
    bodyLimit: 2 * 1024 * 1024,
    rewriteUrl: (req) => String(req.url).replace(/^\/jeasx/, ""),
  },

  /** @type import("@fastify/static").FastifyStaticOptions */
  FASTIFY_STATIC_OPTIONS: {
    maxAge: NODE_ENV_IS_DEVELOPMENT ? 0 : "365d",
  },

  /** @type import("@fastify/cookie").FastifyCookieOptions */
  // FASTIFY_COOKIE_OPTIONS: {},

  /** @type import("@fastify/formbody").FastifyFormbodyOptions */
  // FASTIFY_FORMBODY_OPTIONS: {},

  /** @type import("@fastify/multipart").FastifyMultipartOptions */
  // FASTIFY_MULTIPART_OPTIONS: {},
};
`
            }
          />
          <Highlight
            title="Environment variables for client code"
            icon={<IconAttention />}
          >
            <p>
              For security reasons, only environment variables prefixed with{" "}
              <code>BROWSER_PUBLIC_</code> are accessible in client-side
              JavaScript to prevent accidental exposure of sensitive data. The
              values are only updated at build time, so changes to environment
              variables will require a rebuild to take effect.
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
                <b>BUILD_TIME</b>
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
                <b>ESBUILD_BROWSER_TARGET</b>
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
              <td id="FASTIFY_SERVER_OPTIONS">
                <b>FASTIFY_SERVER_OPTIONS</b>
              </td>
              <td>
                <p>
                  <a
                    href="https://fastify.dev/docs/latest/Reference/Server"
                    target="_blank"
                  >
                    Fastity-Server options reference
                  </a>
                  {" / "}
                  Options applied by Jeasx:
                  <Code lang="json" source={`{"logger": true}`} />
                </p>
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_STATIC_OPTIONS">
                <b>FASTIFY_STATIC_OPTIONS</b>
              </td>
              <td>
                <a
                  href="https://github.com/fastify/fastify-static#options"
                  target="_blank"
                >
                  Fastify-Static options reference
                </a>
                {" / "}
                Options applied by Jeasx:
                <Code
                  lang="json"
                  source={`"root": [
  "/absolute/path/to/public",
  "/absolute/path/to/dist/browser"
],
"prefix": "/",
"wildcard": false,
"preCompressed": true
`}
                />
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_MULTIPART_OPTIONS">
                <b>FASTIFY_MULTIPART_OPTIONS</b>
              </td>
              <td>
                <a
                  href="https://github.com/fastify/fastify-multipart#options"
                  target="_blank"
                >
                  Fastify-Multipart options reference
                </a>
                {" / "}
                Options applied by Jeasx:
                <Code
                  lang="json"
                  source={`{"attachFieldsToBody": "keyValues"}`}
                />
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_COOKIE_OPTIONS">
                <b>FASTIFY_COOKIE_OPTIONS</b>
              </td>
              <td>
                <a
                  href="https://github.com/fastify/fastify-cookie#options"
                  target="_blank"
                >
                  Fastify-Cookie options reference
                </a>
                {" / "}
                Options applied by Jeasx:
                <Code lang="json" source={`{}`} />
              </td>
            </tr>
            <tr>
              <td id="FASTIFY_FORMBODY_OPTIONS">
                <b>FASTIFY_FORMBODY_OPTIONS</b>
              </td>
              <td>
                <a
                  href="https://github.com/fastify/fastify-formbody#options"
                  target="_blank"
                >
                  Fastity-Formbody options reference
                </a>
                {" / "}
                Options applied by Jeasx:
                <Code lang="json" source={`{}`} />
              </td>
            </tr>
          </table>
        </Article>
        <Next link="/hosting" label="How to host a Jeasx application?" />
      </Content>
    </Layout>
  );
}
