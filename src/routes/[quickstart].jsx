import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  const cmds = [
    "npm create jeasx@latest",
    "cd jeasx-quickstart",
    "npm run build",
    "npm run dev",
  ];

  return (
    <Layout title="Quickstart" description="How to get started with Jeasx">
      <Content>
        <Article category="Quickstart" headline="How to get started with Jeasx">
          <Lead>
            It's easy to get started. Just use the following commands to set up
            and start your first project:
          </Lead>
          <Code lang="shell" source={cmds.join("\n")} />
          <p>
            If you want to create a new project with a specific name, you can
            provide an additional argument:
          </p>
          <Code lang="sh" source={`${cmds[0]} my-awesome-project`} />
          <p>
            If your project is successfully started, just visit{" "}
            <a href="http://localhost:3000/" target="_blank">
              http://localhost:3000/
            </a>{" "}
            in a browser of your choice.
          </p>
          <p>
            If you want to see the quickstart example in action, you can visit a
            deployed version of the quickstart template at{" "}
            <a href="https://quickstart.jeasx.dev/" target="_blank">
              https://quickstart.jeasx.dev/
            </a>
            . The contents of the quickstart template can be found at{" "}
            <a href="https://github.com/jeasx/jeasx-quickstart" target="_blank">
              GitHub
            </a>
            .
          </p>
          <Highlight title="Which JavaScript runtime should I use?">
            <p>
              Jeasx is developed and tested with the <b>latest LTS</b> version
              of Node.js (currently Node 24). Node &gt;= v20.12.0 should work,
              too. Older versions are not supported. Newer Node versions should
              work without problems, but are not recommended for production.
            </p>
            <p>
              Jeasx is tested against Bun (&gt;= v1.2.8) and all{" "}
              <a href="https://bun.jeasx.dev" target="_blank">
                Jeasx examples powered by Bun
              </a>{" "}
              are working without any issues, so Bun can be considered as a
              stable platform for running Jeasx.
            </p>
            <p>
              If you encounter any issues, feel free to{" "}
              <a href="https://github.com/jeasx/jeasx/issues" target="_blank">
                report them.
              </a>
            </p>
          </Highlight>
          <h2>Install project with Docker support</h2>
          <p>
            If you want to use Docker, you can bootstrap a new project with
            additional resources (<code>Dockerfile</code>,{" "}
            <code>.dockerignore</code>) via the following flag:
          </p>
          <Code lang="sh" source="npm create jeasx@latest -- --with-docker" />
          <h2>Install project with Vercel support</h2>
          <p>
            If you are going to deploy your project on Vercel, you can bootstrap
            a project with additional resources (<code>vercel.json</code>,{" "}
            <code>api/vercel.js</code>) via the following flag:
          </p>
          <Code lang="sh" source="npm create jeasx@latest -- --with-vercel" />
        </Article>
        <Next link="/jsx" label="Learn about server-side JSX" />
      </Content>
    </Layout>
  );
}
