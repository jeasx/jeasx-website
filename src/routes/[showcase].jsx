import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Showcase({}) {
  return (
    <Layout title="Showcase" description="Homepage">
      <section>
        <header class="main">
          <h1>Showcase</h1>
        </header>
        <dl>
          <dt>
            <a href="https://expo.jeasx.dev" target="_blank">
              jeasx-expo
            </a>
          </dt>
          <dd>
            <p>
              A compilation of concise examples showcasing the capabilities of
              server-rendered JSX.
            </p>
          </dd>
          <dt>
            <a href="https://www.lottoindeutschland.de" target="_blank">
              LOTTO in Deutschland
            </a>
          </dt>
          <dd>
            <p>
              An informational website about LOTTO in Germany, constructed using
              jeasx and achieving outstanding page speed scores.
            </p>
          </dd>
        </dl>
      </section>
    </Layout>
  );
}
