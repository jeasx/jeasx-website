import Code from "../components/Code";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Routes({}) {
  return (
    <Layout
      title="Routes"
      description="Understanding how to define routes is essential for working with jeasx"
    >
      <p>
        In jeasx, a file system-based routing system is at the heart of the
        framework. All routes are stored in the routes directory of your project
        and are JavaScript functions that receive
        <a
          href="https://fastify.dev/docs/latest/Reference/Request/"
          target="_blank"
        >
          request
        </a>
        and
        <a href="https://fastify.dev/docs/latest/Reference/Reply/">reply</a>
        objects from Fastify as props. Routes can be written using JSX, but can
        also be written in vanilla JavaScript. If you prefer TypeScript, it is
        also supported. A route can return various types of payloads for the
        client, including HTML, JSON, or other formats. If you need to perform
        asynchronous operations, you can declare your route or imported
        components as async.
      </p>

      <h2 id="endpoints">Endpoints</h2>
      <p>
        Regular endpoints can be named as you like. You only have to enclose it
        within brackets.
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
      </table>
      <h3>Code example</h3>
      <Code
        source={`
export default function FrontPage({ request, reply }) {
  const path = request.urlData().path;

  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
      <head>
        <base href={\`\${path.endsWith("/") ? path : path + "/"}\`} />
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

      <h2 id="paths">Paths</h2>
      <p>
        Path endpoints are unique endpoints designed to capture all requests for
        the current folder and its subfolders. They enable the creation of
        content with a dynamic URL structure, such as pages retrieved from a
        CMS. If a regular endpoint exists in the same folder as a path endpoint,
        the regular endpoint will take precedence. The name for a path endpoint
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
        source={`
export default async function BlogPage({ request, reply }) {
  const segments = request.urlData().path.split("/");
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
        Guards enable you to intercept requests and are inherited from the root
        to the current folder. They are valuable for controlling access to a
        route. Typically, a guard does not return any payload, allowing the
        request to be handled by the next route. However, if a guard does return
        a payload, it will be delivered to the client, and no other route will
        be executed.
      </p>
      <table>
        <tr>
          <th width="50%">Route path</th>
          <th width="50%">URL</th>
        </tr>
        <tr>
          <td>src/routes/blog/[...guard].jsx</td>
          <td>
            The code of the guard is executed before regular or path endpoints
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
        Additionally, a guard has the capability to return an object, which will
        serve as props for all endpoints protected by the guard. This feature
        enables the creation of endpoints that are entirely independent from the
        request object, simplifying component testing.
      </p>
      <Code
        source={`
export default function PropsGuard({ request }) {
  const body = request.body || {};

  const number = +body["number"];
  const submit = body["submit"];
 
  return { number, submit };
}
`}
      />

      <Code
        source={`
export default function View({ number, submit }) {
  return <p>{submit ? number : "No number"}</p>;
}
`}
      />
      <a href="/browser" class="button">
        Learn about how to handle assets for use in a web browser
      </a>
    </Layout>
  );
}
