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
