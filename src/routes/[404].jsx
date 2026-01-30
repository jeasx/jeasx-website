import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout
      title="404 - Resource Not Found"
      description="The resource you requested has not been found at the specified
      address."
      category="404"
      headline="Resource Not Found"
    >
      <Lead>
        The resource you requested has not been found at the specified address.
      </Lead>
      <a href="/" class="button">
        Go to Homepage
      </a>
    </Layout>
  );
}
