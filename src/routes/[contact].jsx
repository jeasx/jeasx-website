import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";

export default function Contact({}) {
  return (
    <Layout title="Contact" description="Get in touch">
      <Content>
        <Article category="Contributing" headline="Get in touch">
          <p class="lead">
            The development of Jeasx is sponsored by{" "}
            <a href="https://www.neoskop.de" target="_blank">
              Neoskop
            </a>{" "}
            &ndash; a creative web development agency located in Hanover
            (Germany).
          </p>
          <p>
            If you want to get in touch, feel free to contact us:
            <br />
            <a href="mailto:jeasx@neoskop.de">jeasx@neoskop.de</a>
          </p>
        </Article>
      </Content>
    </Layout>
  );
}
