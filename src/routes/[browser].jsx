import Layout from "../components/Layout";

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
    <Layout title="Browser" description="Homepage">
      <section>
        <header class="main">
          <h1>Browser</h1>
        </header>
        <h2>Assets</h2>
        <h2>CSS</h2>
        <h2>Javascript</h2>
      </section>
    </Layout>
  );
}
