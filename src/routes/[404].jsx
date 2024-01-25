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
      <a href="/" class="button">
        Go to Homepage
      </a>
    </Layout>
  );
}
