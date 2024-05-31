import Code from "../components/Code";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Faq({}) {
  return (
    <Layout title="FAQ" description="Everything you need to know about jeasx">
      <dl>
        <dt>Is there something like a context object similar to React?</dt>
        <dd>
          <p>
            Yes, jeasx includes the{" "}
            <a
              href="https://github.com/fastify/fastify-request-context"
              target="_blank"
            >
              fastity-request-context
            </a>{" "}
            by default. You can populate the request context in an endpoint
            (e.g., a guard):
          </p>
          <Code
            source={`
import { requestContext } from "@fastify/request-context";

export default function RootGuard({ request, reply }) {
  requestContext.set("date", new Date());
}
`}
          />
          <p>
            Later, you can access the context in any server-side code of your
            project:
          </p>
          <Code
            source={`
import { requestContext } from "@fastify/request-context";

function CurrentDate() {
  return requestContext.get("date").toISOString();
}
`}
          />
        </dd>
        <dt>Can I post-process the resulting HTML?</dt>
        <dd>
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
  requestContext.set("response", async (payload) => {
    return typeof payload === "string" &&
      String(reply.getHeader("content-type")).startsWith("text/html")
      ? await prettier.format(payload, { parser: "html" })
      : payload;
  });
}
`}
          />
        </dd>

        <dt>Is it possible to use SASS/SCSS?</dt>
        <dd>
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
        </dd>
        <dt>How to use a Browsersync with Jeasx?</dt>
        <dd>
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
        </dd>
        <dt>What are the hosting options for a jeasx project?</dt>
        <dd>
          <p>
            Jeasx provides two different hosting modes tailored to meet your
            specific needs: traditional hosting on a node server or a serverless
            approach. For effortless node-based hosting, I highly recommend a
            platform like{" "}
            <a href="https://railway.app" target="_blank">
              Railway
            </a>
            , which seamlessly operates jeasx without the need for additional
            configurations. If you prefer a serverless approach,{" "}
            <a href="https://vercel.com" target="_blank">
              Vercel
            </a>{" "}
            is the perfect fit, where jeasx provides the necessary
            configurations out of the box.
          </p>
        </dd>
      </dl>
    </Layout>
  );
}
