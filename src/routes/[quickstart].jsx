import Layout from "../components/Layout";
import codeToHtml from "../utils/codeToHtml";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Generic({}) {
  const cmds = [
    "npm create jeasx@latest",
    "cd jeasx-quickstart",
    "npm run dev",
  ];

  return (
    <Layout title="jeasx - JSX with Ease" description="Homepage">
      <section>
        <header class="main">
          <h1>Quickstart</h1>
        </header>
        <p>
          It's easy to get started. Just use the following commands to set up
          and start your first project:
        </p>
        {codeToHtml(cmds.join("\n"), "sh")}
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
        {codeToHtml(`${cmds[0]} my-awesome-project`, "sh")}
        <p>
          If your project is successfully started, just visit
          <a href="http://localhost:3000/" target="_blank">
            http://localhost:3000/
          </a>
          in a browser of your choice.
        </p>
      </section>
    </Layout>
  );
}
