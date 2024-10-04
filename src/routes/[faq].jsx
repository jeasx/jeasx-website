import Article from "../components/Article";
import Aside from "../components/Aside";
import Code from "../components/Code";
import Content from "../components/Content";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Faq({}) {
  return (
    <Layout title="FAQ" description="Everything you need to know about Jeasx">
      <Content>
        <Article category="FAQ" headline="Frequently Asked Questions">
          <h2 id="context">
            Is there something like a context object similar to React?
          </h2>
          <p>
            Yes, Jeasx provides a context object via <code>this</code> which
            gets automagically propagated to sub-components. You can populate
            the context in an endpoint (e.g., a guard):
          </p>
          <Code
            source={`
export default function RootGuard({ request, reply }) {
  this.date = new Date();
}
`}
          />
          <p>
            Later, you can access the context in any sub-component which gets
            called via an endpoint:
          </p>
          <Code
            source={`
export default function CurrentDate() {
  return <p>The current date is {this.date.toISOString()}</p>;
}
`}
          />
          <p>
            Have a look at the{" "}
            <a href="https://expo.jeasx.dev/context" target="_blank">
              demo
            </a>{" "}
            to see how things work using the context as them provider.
          </p>
          <hr />
          <h2 id="post-process">Can I post-process the resulting HTML?</h2>
          <p>
            If you want to prettify the HTML output, you can wire up a response
            handler in any endpoint (e.g. a guard). The response handler takes
            the resulting payload as a parameter and returns the modified
            payload.
          </p>
          <Code
            source={`
import * as prettier from "prettier";
...
export default function RootGuard({ request, reply }) {
  this.response = async (payload) => {
    return typeof payload === "string" &&
      String(reply.getHeader("content-type")).startsWith("text/html")
      ? await prettier.format(payload, { parser: "html" })
      : payload;
  };
}
`}
          />
          <hr />
          <h2 id="helmet">
            Is there a way to set the document title in a sub-component (aka
            Helmet)?
          </h2>
          <p>
            Yes, have a look at the{" "}
            <a href="https://expo.jeasx.dev/head">head example</a> which
            demonstrates how easily this can be achieved with a guard.
          </p>
          <hr />
          <h2 id="css-frameworks">
            Is it possible to use CSS-Frameworks like SASS or Tailwind?
          </h2>

          <p>
            Certainly! Please check out the{" "}
            <a
              href="https://www.github.com/jeasx/jeasx-website"
              target="_blank"
            >
              GitHub repository
            </a>{" "}
            of this website to see how things should be wired.
          </p>
          <hr />
          <h2 id="browsersync">How to use a Browsersync with Jeasx?</h2>
          <p>
            If you want to reload CSS automagically, start{" "}
            <a href="https://browsersync.io/" target="_blank">
              Browsersync
            </a>{" "}
            in proxy-mode in a second terminal:
          </p>
          <Code
            source={`npx -y browser-sync start -w -f "dist/**/index.css" -p localhost:3000`}
            lang="bash"
          />
          <hr />
          <h2 id="hosting">
            What are the hosting options for a Jeasx project?
          </h2>
          <p>
            Jeasx provides two different hosting modes tailored to meet your
            specific needs: traditional hosting on a node server or a serverless
            approach. For effortless node-based hosting, I highly recommend a
            platform like{" "}
            <a href="https://railway.app" target="_blank">
              Railway
            </a>
            , which seamlessly operates Jeasx without the need for additional
            configurations. If you prefer a serverless approach,{" "}
            <a href="https://vercel.com" target="_blank">
              Vercel
            </a>{" "}
            is the perfect fit, where Jeasx provides the necessary
            configurations out of the box.
          </p>
        </Article>
      </Content>
      <Aside
        links={[
          {
            label: "Context",
            link: "#context",
          },
          {
            label: "Post-process",
            link: "#post-process",
          },
          {
            label: "Helmet",
            link: "#helmet",
          },
          {
            label: "CSS-Frameworks",
            link: "#css-frameworks",
          },
          {
            label: "Browsersync",
            link: "#browsersync",
          },
          {
            label: "Hosting",
            link: "#hosting",
          },
        ]}
      />
    </Layout>
  );
}
