import Code from "../components/Code";
import Layout from "../components/Layout";
import IconCookieBite from "../icons/cookie-bite";
import IconFileCode from "../icons/file-code";
import IconRocket from "../icons/rocket";
import IconStopwatch from "../icons/stopwatch";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function Homepage({}) {
  const iconStyle = {
    width: "32px",
    height: "32px",
    transform: "translateY(10px)",
    fill: "#f56a6a",
  };

  return (
    <Layout title="jeasx" description="The Ease of JSX with the power of SSR">
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
          <Code
            source={`
export default async function Products() {
  const { products } = await (
    await fetch("https://dummyjson.com/products")
  ).json();

  return (
    <Layout title="Products">
      {products.map(({ id, title, description }) => (
        <article>
          <a href={id}>{title}</a>
          <p>{description}</p>
        </article>
      ))}
    </Layout>
  );
}`}
          />
        </span>
      </section>

      <section>
        <header class="major">
          <h2>Built on top of a proven tech stack</h2>
        </header>
        <div class="features">
          <article>
            <span class="icon">
              <IconCookieBite style={iconStyle} />
            </span>
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
            <span class="icon">
              <IconFileCode style={iconStyle} />
            </span>
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
            <span class="icon">
              <IconRocket style={iconStyle} />
            </span>
            <div class="content">
              <h3>
                <a href="https://esbuild.github.io/" target="_blank">
                  esbuild
                </a>
              </h3>
              <p>
                esbuild is a bundler for JavaScript. It is written in Go, which
                enables it to achieve remarkable performance gains. esbuild
                supports JSX, TypeScript, tree-shaking and more.
              </p>
            </div>
          </article>
          <article>
            <span class="icon">
              <IconStopwatch style={iconStyle} />
            </span>
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
              Jeasx embraces modern HTML and CSS as the core building blocks for
              web development, complemented by server-side rendered JSX. It
              provides the flexibility to seamlessly enhance functionality using
              JavaScript, empowering developers to create dynamic web sites with
              minimal resource consumption.
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
              Start your project instantly with a single command, enabling
              seamless development with zero turnarounds. Whether you opt for a
              traditional Node server or a serverless environment like Vercel,
              Jeasx provides the flexibility to deploy your application
              according to your preferences.
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
