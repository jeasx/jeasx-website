import Code from "../components/Code";
import Layout from "../components/Layout";

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
    <Layout title="Quickstart" description="How to get started with jeasx">
      <p>
        It's easy to get started. Just use the following commands to set up and
        start your first project:
      </p>
      <Code lang="sh" source={cmds.join("\n")} />
      <p>
        <button
          onclick={`navigator.clipboard.writeText('${cmds.join(" && ")}')`}
        >
          Copy to clipboard
        </button>
      </p>
      <p>
        If you want to create a new project with a specific name, you can
        provide an additional argument:
      </p>
      <Code lang="sh" source={`${cmds[0]} my-awesome-project`} />
      <p>
        If your project is successfully started, just visit
        <a href="http://localhost:3000/" target="_blank">
          http://localhost:3000/
        </a>
        in a browser of your choice.
      </p>
      <a href="/routes" class="button">
        Learn the core concept: routes
      </a>
    </Layout>
  );
}
