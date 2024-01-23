import Layout from "../components/Layout";
import codeToHtml from "../utils/codeToHtml";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Routes({}) {
  return (
    <Layout title="Routes" description="Homepage">
      <section>
        <header class="main">
          <h1>Routes</h1>
        </header>
        <p>
          All routes are stored in the routes-directory of your project and are
          Javascript functions which will receive
          <a
            href="https://fastify.dev/docs/latest/Reference/Request/"
            target="_blank"
          >
            request
          </a>
          and
          <a href="https://fastify.dev/docs/latest/Reference/Reply/">reply</a>
          objects from Fastify as props. A route can be written with JSX, but
          can also be vanilla JS. A route returns the payload for the client,
          which can be HTML, but also JSON or other formats. The code for a
          route can be declared as async if you need to run asynchronous
          operations.
        </p>

        <h2 id="endpoints">Endpoints</h2>
        <p>
          Regular endpoints can be named as you like. You only have to enclose
          it within brackets.
        </p>
        <table>
          <tr>
            <th width="50%">Route path</th>
            <th width="50%">URL</th>
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
            <td>routes/api/posts/[update.json].ts</td>
            <td>/api/posts/update.json</td>
          </tr>
        </table>
        <h3>Code example</h3>
        {codeToHtml(
          `
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
}`
        )}

        <h2 id="paths">Paths</h2>
        <p>
          Paths are special endpoints which catch all requests and allow you to
          create a dynamic content structure (e.g. from a CMS).
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
        {codeToHtml(`
export default async function BlogPage({ request, reply }) {
  const segments = request.urlData().path.split("/");
  const product = await (await fetch(\`https://dummyjson.com/product/\${segments[2]}\`)).json();

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
`)}

        <h2 id="guards">Guards</h2>
        <p>
          Guards allow you to intercept requests. Guards are inherited from the
          root to the current folder. They are useful to control access to a
          route.
        </p>
        <table>
          <tr>
            <th width="50%">Route path</th>
            <th width="50%">URL</th>
          </tr>
          <tr>
            <td>src/routes/blog/[...guard].jsx</td>
            <td>
              The code of the guard is executed before other endpoints in the
              folder or below.
            </td>
          </tr>
        </table>
        <h3>Code example</h3>
        {codeToHtml(`
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
`)}
      </section>
    </Layout>
  );
}
