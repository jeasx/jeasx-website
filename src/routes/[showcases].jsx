import Feature from "../components/Feature";
import Features from "../components/Features";
import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout
      title="Showcases"
      description="Illustrative use cases for Jeasx"
      category="Showcases"
      headline="Illustrative use cases for Jeasx"
    >
      <Lead>
        If you have built a public website with Jeasx,{" "}
        <a href="/contact">please let us know</a>, so we can add it to the
        showcases.
      </Lead>
      <Features>
        <Feature
          headline="Jeasx-Expo"
          link="https://expo.jeasx.dev"
          icon={
            <img src="/favicon/expo.jeasx.dev" width="24" height="24" alt="" />
          }
        >
          A compilation of concise examples showcasing the capabilities of
          server-rendered JSX and userland integrations of various
          JS-Frameworks.
        </Feature>
        <Feature
          headline="Jeasx-Website"
          link="https://github.com/jeasx/jeasx-website"
          icon={<img src="/favicon/github.com" width="24" height="24" alt="" />}
        >
          This website is built with Jeasx. Check out the GitHub repository to
          learn how to integrate Tailwind into your workflow.
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
          Contentful and Jeasx and achieving outstanding page speed scores.
        </Feature>
        <Feature
          headline="Annual report for LOTTO Niedersachsen"
          link="https://unserjahr.lotto-niedersachsen.de/2024"
          icon={
            <img
              src="/favicon/www.lottoindeutschland.de"
              width="24"
              height="24"
              alt=""
            />
          }
        >
          The annual report from LOTTO Niedersachsen (2023 and later) is built
          with Contentful and Jeasx with only ~1.5kb client side JS.
        </Feature>
        <Feature
          headline="Wave Management AG"
          link="https://www.wave-ag.de"
          icon={
            <img src="/favicon/www.wave-ag.de" width="24" height="24" alt="" />
          }
        >
          The website is part of the VHV Insurance Group. The project was
          originally built using Next.js and has been transformed to Jeasx,
          resulting in ~1.5kb client side JS.
        </Feature>
        <Feature
          headline="Enercity Corporate Website"
          link="https://www.enercity.com"
          icon={
            <img
              src="/favicon/www.enercity.com"
              width="24"
              height="24"
              alt=""
            />
          }
        >
          This is the corporate website of the city utility company Enercity.
          The initial project was started with Astro, but was migrated to Jeasx
          to enhance the developer and maintenance experience.
        </Feature>
        <Feature
          headline="Enercity Climate Monitor"
          link="https://www.enercity.de/klimamonitor/langenhagen"
          icon={
            <img src="/favicon/www.enercity.de" width="24" height="24" alt="" />
          }
        >
          This website is operated by the city utility company Enercity and
          displays the locally generated electricity. The project was migrated
          from React to Jeasx to drastically reduce ongoing maintenance costs.
        </Feature>
      </Features>
    </Layout>
  );
}
