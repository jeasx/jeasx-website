import Code from "../components/Code";
import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Faq({}) {
  return (
    <Layout
      title="News"
      description="What are the latest updates and new features in Jeasx?"
    >
      <dl>
        <dt>2024-04-27 - jeasx 0.7.0 released</dt>
        <dd>
          <p>
            This release introduces a new feature that allows you to
            post-process the resulting payloads, such as prettifying the HTML
            output. You can now set up a response handler, for example, in a
            guard. The response handler takes the resulting payload as a
            parameter and returns the modified payload.
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
        <dt>Shame on me...</dt>
        <dd>
          <p>
            I have recently started writing news as we approach the 1.0 release.
            But you can study the{" "}
            <a
              href="https://github.com/jeasx/jeasx/commits/main/"
              target="_blank"
            >
              changelog
            </a>{" "}
            at GitHub to see what has happend in the past.
          </p>
        </dd>
        <dt>2023-12-30 - First public commit</dt>
        <dd>
          <p>
            Our Journey Begins! 🎉 Introducing Jeasx, a revolutionary web
            development framework born out of a summer experiment in 2023. Our
            mission? To simplify web development using server-rendered JSX as
            the cornerstone, bringing back the essence of the web: HTML, CSS,
            and progressive enhancing JavaScript. Join us as we redefine the
            future of web development together!
          </p>
        </dd>
      </dl>
    </Layout>
  );
}
