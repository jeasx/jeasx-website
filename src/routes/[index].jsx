import Layout from "../components/Layout";
import codeToHtml from "../utils/codeToHtml";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function Homepage({}) {
  return (
    <Layout
      title="jeasx - The Ease of JSX with the power of SSR"
      description="Homepage"
    >
      <section id="banner">
        <div class="content">
          <header>
            <h1>jeasx</h1>
            <p>The Ease of JSX with the power of SSR</p>
          </header>
          <p>
            Jeasx seamlessly integrates the modern developer experience of using
            asynchronous JSX with the proven benefits of server-side rendering,
            resulting in a robust and streamlined development approach. By
            eliminating unnecessary complexity and providing developers with
            precise control over HTML, CSS, and JavaScript, Jeasx empowers them
            to craft exceptional web experiences and applications.
          </p>
          <ul class="actions">
            <li>
              <a href="/philosophy" class="button big">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <span class="image object">
          {codeToHtml(`
export default async function Products() {
  const { products } = await (
    await fetch("https://dummyjson.com/products")
  ).json();

  return (
    <Layout title="Products">
      {products.map(({ id, title, description }) => (
        <article>
          <h2><a href={id}>{title}</a></h2>
          <p>{description}</p>
        </article>
      ))}
    </Layout>
  );
}`)}
        </span>
      </section>

      <section>
        <header class="major">
          <h2>Built on top of a proven tech stack</h2>
        </header>
        <div class="features">
          <article>
            <span class="icon fa-cookie-bite"></span>
            <div class="content">
              <h3>
                <a href="https://fastify.dev/" target="_blank">
                  fastify
                </a>
              </h3>
              <p>
                Fastify is a high-performance web framework that excels at
                delivering an exceptional developer experience with minimal
                overhead. Fastify stands out as one of the fastest web
                frameworks available.
              </p>
            </div>
          </article>
          <article>
            <span class="icon fa-file-code"></span>
            <div class="content">
              <h3>
                <a
                  href="https://github.com/jeasx/jsx-async-runtime"
                  target="_blank"
                >
                  jsx-async-runtime
                </a>
              </h3>
              <p>
                JSX is an outstanding templating technology that simplifies web
                development. By utilizing an asynchronous JSX runtime, the
                development process becomes even more straightforward.
              </p>
            </div>
          </article>
          <article>
            <span class="icon fa-rocket"></span>
            <div class="content">
              <h3>
                <a href="https://esbuild.github.io/" target="_blank">
                  esbuild
                </a>
              </h3>
              <p>
                esbuild is an bundler for JavaScript. It is written in Go, which
                enables it to achieve remarkable performance gains. esbuild
                supports TypeScript, JSX,tree-shaking and more.
              </p>
            </div>
          </article>
          <article>
            <span class="icon fa-stopwatch"></span>
            <div class="content">
              <h3>
                <a href="https://pm2.io/" target="_blank">
                  pm2
                </a>
              </h3>
              <p>
                PM2's intuitive configuration options and extensive feature set
                make it a go-to choice for developers looking to streamline
                their workflow and maximize productivity.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <header class="major">
          <h2>Learn more</h2>
        </header>
        <div class="posts">
          <article>
            {/* <a href="#" class="image">
              <img src="/images/placeholder.webp" alt="" />
            </a> */}
            <h3>Philosophy</h3>
            <p>
              Jeasx simplifies web development by removing unnecessary
              complexity. It prioritizes HTML and CSS as the foundational layer
              for web development, while offering the flexibility to enhance
              functionality with a touch of JavaScript.
            </p>
            <ul class="actions">
              <li>
                <a href="/philosophy" class="button">
                  Read more...
                </a>
              </li>
            </ul>
          </article>
          <article>
            {/* <a href="#" class="image">
              <img src="/images/placeholder.webp" alt="" />
            </a> */}
            <h3>Getting started</h3>
            <p>
              Start your project in seconds with a single command. Whether you
              prefer a traditional Node server or a serverless environment like
              Vercel, Jeasx gives you the flexibility to deploy your application
              the way you want.
            </p>
            <ul class="actions">
              <li>
                <a href="/quickstart" class="button">
                  Read more...
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </Layout>
  );
}
