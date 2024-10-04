import Article from "../components/Article";
import Content from "../components/Content";
import Feature from "../components/Feature";
import Features from "../components/Features";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Showcase({}) {
  return (
    <Layout title="Showcase" description="Illustrative use cases for Jeasx">
      <Content>
        <Article
          category="Showcase"
          headline="Illustrative use cases for Jeasx"
        >
          <p class="lead">
            If you have built a public website with Jeasx,{" "}
            <a href="/contact">please let us know</a>, so we can add it to the
            showcase.
          </p>
          <Features>
            <Feature
              headline="Jeasx-Expo"
              link="https://expo.jeasx.dev"
              icon={
                <img
                  src="/favicon/expo.jeasx.dev"
                  width="24"
                  height="24"
                  alt=""
                />
              }
            >
              A compilation of concise examples showcasing the capabilities of
              server-rendered JSX and userland integrations of various
              JS-Frameworks.
            </Feature>
            <Feature
              headline="Jeasx-Website"
              link="https://github.com/jeasx/jeasx-website"
              icon={
                <img src="/favicon/github.com" width="24" height="24" alt="" />
              }
            >
              This website is built with Jeasx. Check out the GitHub repository
              to learn how to integrate Tailwind into your workflow.
            </Feature>
            <Feature
              headline="LOTTO in Deutschland"
              link="https://www.lottoindeutschland.de"
              icon={
                <img
                  src="/favicon/www.lottoindeutschland.de"
                  width="24"
                  height="24"
                  alt=""
                />
              }
            >
              An informational website about LOTTO in Germany, constructed using
              Jeasx and achieving outstanding page speed scores.
            </Feature>
            <Feature
              headline="Wave Management AG"
              link="https://www.wave-ag.de"
              icon={
                <img
                  src="/favicon/www.wave-ag.de"
                  width="24"
                  height="24"
                  alt=""
                />
              }
            >
              The website is part of the VHV Insurance Group. The project was
              originally built using Next.js and has been transformed to Jeasx,
              resulting in ~1.5kb client side JS.
            </Feature>
          </Features>
        </Article>
      </Content>
    </Layout>
  );
}
