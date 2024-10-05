import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";

export default function Contact({}) {
  return (
    <Layout title="Contact" description="Get in touch">
      <Content>
        <Article category="Contributing" headline="Get in touch">
          <p class="lead">
            If you want to get in touch, feel free to contact us:
          </p>
          <p>
            <a href="mailto:mail@jeasx.dev">mail@jeasx.dev</a>
          </p>
        </Article>
      </Content>
    </Layout>
  );
}
