import Feature from "../components/Feature";
import Features from "../components/Features";
import HeroStage from "../components/HeroStage";
import Highlight from "../components/Highlight";
import IconArchitecture from "../components/icons/IconArchitecture";
import IconInstallation from "../components/icons/IconInstallation";
import IconReference from "../components/icons/IconReference";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

export default async function () {
  return (
    <Layout
      title="Homepage"
      description="The Ease of JSX with the power of SSR"
      stage={<HeroStage />}
      headline="Welcome to Jeasx"
      next={<Next label="How to get started?" link="/quickstart" />}
    >
      <Lead>
        By eliminating unnecessary complexity and providing precise control over HTML, CSS, and
        JavaScript, Jeasx empowers developers to craft sustainable web experiences and applications.
      </Lead>
      <h2>Breaking News</h2>
      <Highlight title="2026-02-04 - Jeasx 2.3.1 released">
        <p>
          🎉 This patch release fixes a security issue in Fastify. <a href="/news">Learn more...</a>
        </p>
      </Highlight>
      <h2>Built on top of a proven tech stack</h2>
      <p>
        Jeasx is a sleek and modern framework that leverages tried and tested web technologies to
        deliver powerful and efficient web solutions.
      </p>
      <Features>
        <Feature
          headline="jsx-async-runtime"
          link="https://github.com/jeasx/jsx-async-runtime"
          icon={<IconInstallation />}
        >
          JSX is an outstanding templating technology that simplifies web development. By utilizing
          an asynchronous JSX runtime, the development process becomes even more straightforward.
        </Feature>
        <Feature headline="fastify" link="https://fastify.dev" icon={<IconArchitecture />}>
          Fastify is a high-performance web framework that excels at delivering an exceptional
          developer experience with minimal overhead. Fastify stands out as one of the fastest web
          frameworks available.
        </Feature>
        <Feature headline="esbuild" link="https://esbuild.github.io" icon={<IconReference />}>
          esbuild is a bundler for JavaScript. It is written in Go, which enables it to achieve
          remarkable performance gains. esbuild supports JSX, TypeScript, tree-shaking and more.
        </Feature>
      </Features>
      <h2>Learn by examples</h2>
      <p>
        Exploring a new framework can be a daunting task. There are{" "}
        <a href="https://expo.jeasx.dev">lots of examples</a> with source code which will help you
        get started easily.
      </p>
      <h2>Philosophy</h2>
      <p>
        Jeasx embraces modern HTML and CSS as the core building blocks for web development,
        complemented by server-side rendered asynchronous JSX. It provides the flexibility to
        seamlessly enhance functionality using JavaScript, empowering developers to create dynamic
        web sites with minimal resource consumption.
      </p>
      <a href="/philosophy">Read more about our Philosophy</a>
      <h2>Getting started</h2>
      <p>
        Start your project instantly with a single command, enabling seamless development with zero
        turnarounds. Whether you opt for a Node server, a Docker setup or a serverless environment,
        Jeasx provides the flexibility to deploy your application according to your preferences.
      </p>
    </Layout>
  );
}
