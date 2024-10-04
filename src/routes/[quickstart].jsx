import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Quickstart({}) {
  const cmds = [
    "npm create jeasx@latest",
    "cd jeasx-quickstart",
    "npm run dev",
  ];

  return (
    <Layout title="Quickstart" description="How to get started with Jeasx">
      <Content>
        <Article category="Quickstart" headline="How to get started with Jeasx">
          <p class="lead">
            It's easy to get started. Just use the following commands to set up
            and start your first project:
          </p>
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
        </Article>
        <Next link="/routes" label="Learn the core concept: routes" />
      </Content>
    </Layout>
  );
}
