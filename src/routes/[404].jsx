import Article from "../components/Article";
import Content from "../components/Content";
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
      <Content>
        <Article category="404" headline="Resource Not Found">
          <p class="lead">
            The resource you requested has not been found at the specified
            address.
          </p>
          <a href="/" class="button">
            Go to Homepage
          </a>
        </Article>
      </Content>
    </Layout>
  );
}
