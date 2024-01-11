import { escapeEntities } from "jsx-async-runtime";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Homepage({}) {
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
            Jeasx seamlessly combines the modern developer experience of using
            JSX with the proven benefits of server-side rendering, resulting in
            a powerful and streamlined development approach. By eliminating
            unnecessary complexity and offering fine-grained control over HTML,
            CSS, and JavaScript, Jeasx empowers developers to create exceptional
            web applications effortlessly.
          </p>
          <ul class="actions">
            <li>
              <a href="#" class="button big">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <span class="image object">
          <pre>
            <code class="language-js">
              {escapeEntities(`
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
}`).trim()}
            </code>
          </pre>
        </span>
      </section>

      <section>
        <header class="major">
          <h2>Built on a robust and proven tech stack</h2>
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
              <p>Fast and low overhead web framework.</p>
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
              <p>Asynchronous JSX as powerful templating tool.</p>
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
              <p>An extremely fast bundler for the web.</p>
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
              <p>Process manager with file watcher for fast development.</p>
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
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul class="actions">
              <li>
                <a href="#" class="button">
                  More
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
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul class="actions">
              <li>
                <a href="#" class="button">
                  More
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </Layout>
  );
}
