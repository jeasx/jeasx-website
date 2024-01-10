import { escapeEntities } from "jsx-async-runtime";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Homepage({}) {
  return (
    <Layout title="jeasx - JSX with Ease" description="Homepage">
      <section id="banner">
        <div class="content">
          <header>
            <h1>jeasx</h1>
            <p>The power of server side rendering with the Ease of JSX</p>
          </header>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
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
          <h2>Built on a reliable stack</h2>
        </header>
        <div class="features">
          <article>
            <span class="icon fa-gem"></span>
            <div class="content">
              <h3>Fastify</h3>
              <p>
                Fastify is a web framework highly focused on providing the best
                developer experience with the least overhead and a powerful
                plugin architecture.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-signal"></span>
            <div class="content">
              <h3>jsx-async-runtime</h3>
              <p>
                An asynchronous JSX runtime without dependencies to be used as
                server-side template engine.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-rocket"></span>
            <div class="content">
              <h3>esbuild</h3>
              <p>
                The main goal of the esbuild bundler project is to bring about a
                new era of build tool performance, and create an easy-to-use
                modern bundler along the way.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-paper-plane"></span>
            <div class="content">
              <h3>PM2</h3>
              <p>
                Node.js Production Process Manager with a built-in Load
                Balancer.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <header class="major">
          <h2>Ipsum sed dolor</h2>
        </header>
        <div class="posts">
          <article>
            <a href="#" class="image">
              <img src="/images/placeholder.webp" alt="" />
            </a>
            <h3>Interdum aenean</h3>
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
            <a href="#" class="image">
              <img src="/images/placeholder.webp" alt="" />
            </a>
            <h3>Nulla amet dolore</h3>
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
