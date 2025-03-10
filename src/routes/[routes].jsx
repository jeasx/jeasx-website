import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import IconAttention from "../components/icons/IconAttention";
import Layout from "../components/Layout";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Routes({}) {
  return (
    <Layout
      title="Routes &amp; Guards"
      description="Understanding how to define routes and guards"
    >
      <Content>
        <Article category="Routes &amp; Guards" headline="Understanding routes">
          <p class="lead">
            In Jeasx, a file system-based routing system is at the heart of the
            framework.
          </p>
          <p>
            All routes are stored in the routes directory of your project and
            are functions that receive{" "}
            <a
              href="https://fastify.dev/docs/latest/Reference/Request/"
              target="_blank"
            >
              request
            </a>{" "}
            and{" "}
            <a href="https://fastify.dev/docs/latest/Reference/Reply/">reply</a>{" "}
            objects from Fastify as props.
          </p>
          <Highlight
            title="What is the difference between request.url, request.path and request.route?"
            icon={<IconAttention />}
          >
            <p>
              The vanilla Fastify request object exposes the current url (e.g.{" "}
              <code>/json/api/request.json?foo=bar</code>) via{" "}
              <code>request.url</code>.
            </p>
            <p>
              Jeasx adds two additional attributes to the Fastify request object
              to improve the developer experience:
              <ul>
                <li>
                  <code>request.path</code> gives you the plain path without any
                  query parameters (e.g. <code>/json/api/request.json</code>)
                </li>
                <li>
                  <code>request.route</code> provides the path to the current
                  endpoint handler (e.g. <code>/json/[...path]</code>)
                </li>
              </ul>
            </p>
            <p>
              Have a look at the{" "}
              <a
                href="https://expo.jeasx.dev/json/api/request.json?foo=bar"
                target="_blank"
              >
                JSON example
              </a>{" "}
              to see <code>request.url, request.path, request.route</code> at
              work.
            </p>
          </Highlight>
          <p>
            Routes can be written using JSX, but can also be written in
            JavaScript and/or TypeScript, so supported extensions are:{" "}
            <code>.js(x)|.ts(x)</code>
          </p>
          <p>
            A route can return various types of payloads for the client,
            including HTML (default), JSON, or other formats. If you need to
            perform asynchronous operations, you can declare your route or
            imported components as async.
          </p>
          <h2 id="endpoints">Named routes</h2>
          <p>
            The only rule for named routes is to enclose the base filename
            within brackets. This convention allows you to store components,
            services and utilities besides your routes without exposing them as
            endpoints.
          </p>
          <table>
            <tr>
              <th width="50%">Route path</th>
              <th width="50%">URL</th>
            </tr>
            <tr>
              <td>src/routes/[index].jsx</td>
              <td>/</td>
            </tr>
            <tr>
              <td>src/routes/a/b/[you-name-it].jsx</td>
              <td>/a/b/you-name-it</td>
            </tr>
            <tr>
              <td>src/routes/company/[index].tsx</td>
              <td>/company</td>
            </tr>
            <tr>
              <td>src/routes/images/[logo.svg].js</td>
              <td>/images/logo.svg</td>
            </tr>
            <tr>
              <td>src/routes/api/posts/[update.json].ts</td>
              <td>/api/posts/update.json</td>
            </tr>
            <tr>
              <td>src/routes/api/posts/utils/format.ts</td>
              <td>This file is not exposed as endpoint.</td>
            </tr>
          </table>
          <h3>Code example</h3>
          <Code
            source={`
export default function Welcome({ request, reply }) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
      <head>
        <base href={\`\${request.path.endsWith("/") ? request.path : request.path + "/"}\`} />
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
      </html>
    <>
  );
}`}
          />

          <h2 id="paths">Dynamic routes</h2>
          <p>
            Dynamic routes are wildcards designed to capture all requests for
            the current folder and its subfolders. They enable the creation of
            content with a dynamic URL structure, such as pages retrieved from a
            CMS. If a named route exists in the same folder as dynamic route,
            the named route will take precedence. The name for a dynamic route
            is fixed and must be:
            <code>[...path](.jsx|.js|.tsx|.ts)</code>
          </p>
          <table>
            <tr>
              <th width="50%">Route path</th>
              <th width="50%">URL</th>
            </tr>
            <tr>
              <td>src/routes/blog/[...path].jsx</td>
              <td>
                /blog/article1
                <br />
                /blog/category/article2
              </td>
            </tr>
          </table>
          <h3>Code example</h3>
          <Code
            source={`export default async function Product({ request, reply }) {
  const segments = request.path.split("/");
  const product = await (await fetch(\`https://dummyjson.com/product/\${segments[1]}\`)).json();

  if (product.message) {
    reply.status(404);
    return;
  }

  return (
    <Layout title={product.title} description={product.description}>
      <article>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </article>
    </Layout>
  );
}
`}
          />

          <h2 id="guards">Guards</h2>
          <p>
            Guards enable you to intercept requests and are inherited from the
            root to the current folder. They are valuable for controlling access
            to a route. Typically, a guard does not return any payload, allowing
            the request to be handled by the next defined route. However, if a
            guard does return a payload, it will be delivered to the client, and
            no other route will be executed.
          </p>
          <table>
            <tr>
              <th width="50%">Route path</th>
              <th width="50%">URL</th>
            </tr>
            <tr>
              <td>src/routes/blog/[...guard].jsx</td>
              <td>
                The code of the guard is executed before named or dynamic routes
                in the current folder or below.
              </td>
            </tr>
          </table>
          <h3>Code example</h3>
          <Code
            source={`
export default function AuthorizationGuard({ request, reply }) {
  const authorization = request.headers["authorization"];
  if (
    authorization !== \`Basic \${Buffer.from("demo:demo").toString("base64")}\`
  ) {
    reply.header("WWW-Authenticate", 'Basic realm="Restricted Area');
    reply.status(401);
    return (
      <Layout title="Error 401">
        <h1>Error 401</h1>
        <p>You are not allowed to view this page!</p>
      </Layout>
    );
  }
}
`}
          />
          <p>
            Additionally, a guard has the capability to return an object, which
            will serve as props for all routes protected by the guard. This
            feature enables the creation of routes that are entirely independent
            from the request object, simplifying component testing.
          </p>
          <Code
            source={`
export default function PropsGuard({ request }) {
  const body = request.body || {};
  return { message: body["message"] };
}
`}
          />

          <Code
            source={`
export default function MessageView({ message }) {
  return <p>{message ? message : "No message for you"}</p>;
}
`}
          />
          <Highlight title="Shared code" icon={<IconAttention />}>
            <p>
              While you have the flexibility to share code between the server
              and browser, this is typically an edge case, as the DOM is not
              relevant on the server side, and node core modules are not
              compatible with the browser. To optimize build performance during
              development by efficiently minimizing unnecessary rebuilds, no
              rebuild is triggered when shared code changes per default.
            </p>
          </Highlight>
          <p>
            For all server side code (e.g. routes), Jeasx watches all files
            below <code>src</code>, but ignores all files in{" "}
            <code>src/browser</code> per default. If you want to import browser
            code into server code (e.g. when pre-rendering Preact/React
            components on server side), you can specify advanced 'ignore rules'.
          </p>
          <p>
            The following rule ignores all changes in <code>src/browser</code> ,
            but triggers a rebuild of server code when a file changes in{" "}
            <code>src/browser/react</code> or <code>src/browser/preact</code>.
          </p>
          <Code
            source={`JEASX_BUILD_ROUTES_IGNORE_WATCH="src/browser/!(react|preact)"`}
          />
        </Article>
        <Next link="/browser" label="How to handle browser assets?" />
      </Content>
    </Layout>
  );
}
