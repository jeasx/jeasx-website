import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Feature from "../components/Feature";
import Features from "../components/Features";
import Highlight from "../components/Highlight";
import IconArchitecture from "../components/icons/IconArchitecture";
import IconHeroStage from "../components/icons/IconHeroStage";
import IconInstallation from "../components/icons/IconInstallation";
import IconReference from "../components/icons/IconReference";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function ({}) {
  return (
    <Layout
      title="Homepage"
      description="The Ease of JSX with the power of SSR"
      stage={<HeroStage />}
    >
      <Content>
        <Article headline="Welcome to Jeasx">
          <Lead>
            By eliminating unnecessary complexity and providing precise control
            over HTML, CSS, and JavaScript, Jeasx empowers developers to craft
            sustainable web experiences and applications.
          </Lead>
          <h2>Breaking News</h2>
          <Highlight title="2025-10-28 - Jeasx 2.1.0 released">
            <p>
              🎉 Environment vars can now be loaded from a JavaScript file.{" "}
              <a href="/news">Learn more...</a>
            </p>
          </Highlight>
          <h2>Built on top of a proven tech stack</h2>
          <p>
            Jeasx is a sleek and modern framework that leverages tried and
            tested web technologies to deliver powerful and efficient web
            solutions.
          </p>
          <Features>
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
              headline="esbuild"
              link="https://esbuild.github.io"
              icon={<IconReference />}
            >
              esbuild is a bundler for JavaScript. It is written in Go, which
              enables it to achieve remarkable performance gains. esbuild
              supports JSX, TypeScript, tree-shaking and more.
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
            Node server, a Docker setup or a serverless environment, Jeasx
            provides the flexibility to deploy your application according to
            your preferences.
          </p>
        </Article>
        <Next label="How to get started?" link="/quickstart" />
      </Content>
    </Layout>
  );
}

function HeroStage() {
  return (
    <div class="overflow-hidden bg-slate-900 dark:mt-[-4.75rem] dark:-mb-32 dark:pt-[4.75rem] dark:pb-32">
      <div class="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div class="lg:max-w-8xl mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div class="relative z-10 md:text-center lg:text-left">
            <img
              alt=""
              fetchPriority="high"
              width="530"
              height="530"
              decoding="async"
              class="absolute right-full bottom-full -mr-72 -mb-56 opacity-50"
              style="color: transparent"
              src="/images/blur-cyan.avif"
            />
            <div class="relative">
              <p class="font-display inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent">
                The Ease of JSX with the power of SSR
              </p>
              <p class="mt-3 text-2xl tracking-tight text-slate-400">
                The developer experience of asynchronous JSX with the proven
                benefits of server-side rendering, resulting in a robust and
                streamlined web development approach.
              </p>
              <div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <a
                  class="rounded-full bg-sky-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                  href="/quickstart"
                >
                  Get started
                </a>
                <a
                  class="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                  href="https://expo.jeasx.dev"
                  target="_blank"
                >
                  Learn by examples
                </a>
              </div>
            </div>
          </div>
          <div class="relative lg:static xl:pl-10">
            <div class="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <IconHeroStage />
            </div>
            <div class="relative">
              <img
                alt=""
                fetchPriority="high"
                width="530"
                height="530"
                decoding="async"
                class="absolute -top-64 -right-64"
                style="color: transparent"
                src="/images/blur-cyan.avif"
              />
              <img
                alt=""
                fetchPriority="high"
                width="567"
                height="567"
                decoding="async"
                class="absolute -right-44 -bottom-40"
                style="color: transparent"
                src="/images/blur-indigo.avif"
              />
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"></div>
              <div class="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div class="absolute -top-px right-11 left-20 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"></div>
                <div class="absolute right-20 -bottom-px left-11 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0"></div>
                <div class="pt-2 pb-2 pl-4">
                  <div class="mt-4 flex space-x-2 text-xs">
                    <div class="flex h-6 rounded-full bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300">
                      <div class="flex items-center rounded-full bg-slate-800 px-2.5">
                        [recipe].jsx
                      </div>
                    </div>
                  </div>
                  <div class="flex items-start px-1 text-sm">
                    <Code
                      source={`
export default async function ({ request, reply }) {
  const id = request.query["id"];
  const { name, image, ingredients } = await (
    await fetch(\`https://dummyjson.com/recipes/\${id}\`)
  ).json();

  return (
    <article class="recipe">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </article>
  );
}
`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
