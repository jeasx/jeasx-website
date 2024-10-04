import Article from "../components/Article";
import Content from "../components/Content";
import Feature from "../components/Feature";
import Features from "../components/Features";
import IconArchitecture from "../components/icons/IconArchitecture";
import IconInstallation from "../components/icons/IconInstallation";
import IconPlugins from "../components/icons/IconPlugins";
import IconReference from "../components/icons/IconReference";
import Layout from "../components/Layout";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function Homepage({ request }) {
  return (
    <Layout title="Jeasx" description="The Ease of JSX with the power of SSR">
      <Content>
        <Article category="Introduction" headline="Welcome to Jeasx">
          <p class="lead">
            By eliminating unnecessary complexity and providing precise control
            over HTML, CSS, and JavaScript, Jeasx empowers developers to craft
            exceptional web experiences and applications.
          </p>
          <h2>Built on top of a proven tech stack</h2>
          <p>
            Jeasx is a sleek and modern framework that leverages tried and
            tested web technologies to deliver powerful and efficient web
            solutions.
          </p>
          <Features>
            <Feature
              headline="fastify"
              link="https://fastify.dev"
              icon={<IconArchitecture />}
            >
              Fastify is a high-performance web framework that excels at
              delivering an exceptional developer experience with minimal
              overhead. Fastify stands out as one of the fastest web frameworks
              available.
            </Feature>
            <Feature
              headline="jsx-async-runtime"
              link="https://github.com/jeasx/jsx-async-runtime"
              icon={<IconInstallation />}
            >
              JSX is an outstanding templating technology that simplifies web
              development. By utilizing an asynchronous JSX runtime, the
              development process becomes even more straightforward.
            </Feature>
            <Feature
              headline="esbuild"
              link="https://esbuild.github.io"
              icon={<IconReference />}
            >
              esbuild is a bundler for JavaScript. It is written in Go, which
              enables it to achieve remarkable performance gains. esbuild
              supports JSX, TypeScript, tree-shaking and more.
            </Feature>
            <Feature
              headline="pm2"
              link="https://pm2.io"
              icon={<IconPlugins />}
            >
              PM2's intuitive configuration options and extensive feature set
              make it a go-to choice for developers looking to streamline their
              workflow and maximize productivity.
            </Feature>
          </Features>
          <h2>Learn by examples</h2>
          <p>
            Exploring a new framework can be a daunting task. There are{" "}
            <a href="https://expo.jeasx.dev">lots of examples</a> with source
            code which will help you get started easily.
          </p>

          <h2>Philosophy</h2>
          <p>
            Jeasx embraces modern HTML and CSS as the core building blocks for
            web development, complemented by server-side rendered asynchronous
            JSX. It provides the flexibility to seamlessly enhance functionality
            using JavaScript, empowering developers to create dynamic web sites
            with minimal resource consumption.
          </p>
          <a href="/philosophy">Read more about our Philosophy</a>
          <h2>Getting started</h2>
          <p>
            Start your project instantly with a single command, enabling
            seamless development with zero turnarounds. Whether you opt for a
            traditional Node server or a serverless environment like Vercel,
            Jeasx provides the flexibility to deploy your application according
            to your preferences.
          </p>
        </Article>
        <Next label="How to get started?" link="/quickstart" />
      </Content>
    </Layout>
  );
}
