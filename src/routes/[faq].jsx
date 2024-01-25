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
            </a>
            by default. You can populate the request context in an endpoint
            (e.g., a guard) using the following code:
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
            project using the following code:
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
      </dl>
    </Layout>
  );
}
