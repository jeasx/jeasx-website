import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Resources({}) {
  return (
    <Layout title="Resources" description="Homepage">
      <section>
        <header class="main">
          <h1>Resources</h1>
        </header>
        <dl>
          <dt>
            <a href="https://expo.jeasx.dev" target="_blank">
              Expo
            </a>
          </dt>
          <dd>
            A collection of small examples what can be done with server rendered
            JSX.
          </dd>
        </dl>
      </section>
    </Layout>
  );
}
