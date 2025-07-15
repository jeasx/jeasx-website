import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout title="Contact" description="Get in touch">
      <Content>
        <Article category="Contributing" headline="Get in touch">
          <Lead>If you want to get in touch, feel free to contact us:</Lead>
          <p>
            <a href="mailto:mail@jeasx.dev">mail@jeasx.dev</a>
          </p>
        </Article>
      </Content>
    </Layout>
  );
}
