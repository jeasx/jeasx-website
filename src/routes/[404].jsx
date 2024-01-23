import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ResourceNotFound({}) {
  return (
    <Layout
      title="404 - Resource Not Found"
      description="The resource you requested has not been found at the specified
    address."
    >
      <section>
        <header class="main">
          <h1>404 - Resource Not Found</h1>
        </header>
        <p>
          The resource you requested has not been found at the specified
          address.
        </p>
        <a href="/" class="button">
          Go to Homepage
        </a>
      </section>
    </Layout>
  );
}
