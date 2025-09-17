import Article from "../components/Article";
import Aside from "../components/Aside";
import Code from "../components/Code";
import Content from "../components/Content";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
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
export default function ({ request, reply }) {
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
export default function () {
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
          <h2 id="error-handler">
            How can I provide user friendly error messages?
          </h2>
          <p>
            <p>
              To set up an error handler, simply register it in a route of your
              choice:
            </p>
            <Code
              lang="javascript"
              source={
                /*js*/ `this.errorHandler = async (error) => {
  // You can decide if you want to create a log entry.
  // console.error("❌", error);
  return <h1>Internal server error</h1>;
}`.trim()
              }
            />
          </p>
          <h2 id="response-handler">
            How can I modifiy the resulting response (e.g. post-process HTML)?
          </h2>
          <p>
            For example, if you want to prettify the HTML output, you can wire
            up a response handler in any endpoint (e.g., a guard). The response
            handler takes the resulting payload as a parameter and returns the
            modified payload.
          </p>
          <Code
            source={`
import * as prettier from "prettier";
...
export default function ({ request, reply }) {
  this.responseHandler = async (payload) => {
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
            Certainly! Please have a look at the{" "}
            <a
              href="https://github.com/jeasx/jeasx-website/blob/main/package.json"
              target="_blank"
            >
              package.json
            </a>{" "}
            of this website to see how things should be wired for Tailwind. Same
            approach works for SASS too.
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
          <h2 id="vercel">
            How can I apply custom caching rules via FASTIFY_STATIC_HEADERS for
            the public folder when deploying to Vercel?
          </h2>
          <p>
            As Vercel configures the public folder as default directory for
            static assets, you have to specify another directory in your{" "}
            <code>vercel.json</code>. For example, create an empty directory
            named <code>build</code> at root level with only a{" "}
            <code>.gitkeep</code> in it:
          </p>
          <Code source={`{"outputDirectory": "build"}`} lang="json" />
          <p>
            This change is only recommended, if your Vercel application is
            proxied via a 3rd-party CDN like Cloudflare. Please visit the{" "}
            <a
              target="_blank"
              href="https://vercel.com/docs/project-configuration#outputdirectory"
            >
              Vercel documentation
            </a>{" "}
            for more information.
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
            label: "Error handler",
            link: "#error-handler",
          },
          {
            label: "Response handler",
            link: "#response-handler",
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
            label: "Vercel",
            link: "#vercel",
          },
        ]}
      />
    </Layout>
  );
}
