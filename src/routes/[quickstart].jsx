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
            .
          </p>
          <Highlight title="Which Node version should I use?">
            <p>
              Jeasx is developed and tested with the <b>latest LTS</b> version
              of Node.js (currently Node 22). Node 20.12.0 or newer should work,
              too. Older versions are not supported. Newer Node versions should
              work as well, but are not recommended for production. If you
              encounter any issues, feel free to{" "}
              <a href="https://github.com/jeasx/jeasx/issues" target="_blank">
                report them.
              </a>
            </p>
          </Highlight>
        </Article>
        <Next link="/jsx" label="Learn about server-side JSX" />
      </Content>
    </Layout>
  );
}
