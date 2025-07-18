import { escapeEntities } from "jsx-async-runtime";
import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import IconAttention from "../components/icons/IconAttention";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout title="JSX &amp; SSR" description="Understanding JSX">
      <Content>
        <Article
          category="JSX &amp; SSR"
          headline="Server-side rendering of JSX"
        >
          <Lead>
            Jeasx is a server-side rendering (SSR) framework based on JSX, which
            means that all of your code is executed on the server and the
            resulting HTML is sent to the client. JSX is a great templating
            technology due to its simplicity if you are familiar with the basics
            of JavaScript.
          </Lead>
          <p>
            If you are not familiar with JSX, you should read the excellent{" "}
            <a
              href="https://react.dev/learn/writing-markup-with-jsx"
              target="_blank"
            >
              introduction to JSX
            </a>{" "}
            at the React homepage.
          </p>
          <h2>JSX in Jeasx is different</h2>
          <p>
            Jeasx uses a syntax similar to React, but there are some important
            differences. Under the hood an independent asynchronous JSX runtime
            implementation (
            <a
              href="https://github.com/jeasx/jsx-async-runtime"
              target="_blank"
            >
              jsx-async-runtime
            </a>
            ) is used, which is optimized for performant server-side rendering.
          </p>
          <ul>
            <li>
              You can use asynchronous code out of the box, just mark your
              component as <code>async</code> and feel free to use{" "}
              <code>await</code> to resolve promises.
            </li>
            <li>
              Attribute names are the same as in HTML, therefore you must use{" "}
              <code>class</code> instead of <code>className</code> or{" "}
              <code>aria-label</code> instead of <code>ariaLabel</code>.
            </li>
            <li>
              When using an <strong>object for a class</strong> definition, it
              is automagically translated to a string with all truthy values
              separated by spaces.
            </li>
            <li>
              When using an <strong>array of strings for a class</strong>{" "}
              definition, it is automatically translated into a single string
              with values separated by spaces.
            </li>
            <li>
              When using a <strong>style object</strong> to create inline
              styles, you have to provide css attribute names as used in CSS,
              therefore use <code>background-color</code> instead of{" "}
              <code>backgroundColor</code>.
            </li>
            <li>
              When using an <strong>object</strong> as value for other JSX
              attributes than <code>class</code> or <code>style</code>, it is
              automatically translated to a JSON string in the resulting markup
              (e.g. <code>{`data-props={{ key: "value" }}`}</code> becomes{" "}
              <code>
                {escapeEntities(
                  `data-props="{&quot;key&quot;:&quot;value&quot;}"`,
                )}
              </code>
              ).
            </li>
            <li>
              When rendering HTML markup via JSX components, no escaping is done
              due to performance reasons, so you have to be careful when
              emitting data from uncontrolled sources. You can use a utility
              function via{" "}
              <code>
                import {"{"} escapeEntities {"}"} from "jsx-async-runtime"
              </code>{" "}
              to escape HTML entities.
            </li>
          </ul>
          <h3>
            Here's an example which shows all the differences in a single file:
          </h3>
          <Code
            source={
              /*js*/ `import { escapeEntities } from "jsx-async-runtime";

export default async function () {
  const { value } = await (
    await fetch("https://api.chucknorris.io/jokes/random")
  ).json();

  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <title>Jokes</title>
          <style>{".center {text-align: center;}"}</style>
        </head>
        <body class="body" style={{ "background-color": "red", "padding": "1rem" }}>
          <div class={["v-align","h-align"]} data-props={{ key: "value" }}>
            <h1
              class={{ center: true, "my-class": true, "my-other-class": false }}
              style="color: white"
            >
              {escapeEntities(value)}
            </h1>
          </div>
        </body>
      </html>
    </>
  );
}
`
            }
          />
          <p>
            <a href="/jsx-jokes" target="_blank">
              View the result of the above code
            </a>
          </p>
          <h2>Transforming JSX components at runtime</h2>
          <p>
            The JSX runtime also provides a way to transform JSX components.
            This can be useful to patch the markup of 3rd party components or to
            rewrite existing attributes of components.
          </p>
          <p>
            The following example adds a build timestamp to all image sources,
            so each image receives a new URL with each deployment. It works by
            adding a custom <code>jsxToString</code> handler via the{" "}
            <code>this</code> context. Just add the following code as{" "}
            <code>src/routes/[guard].js</code> to your project:
          </p>
          <Code
            source={`import { jsxToString } from "jsx-async-runtime";

export default function ({ request, reply }) {
  this.jsxToString = (jsxElement) => {
    if (jsxElement.type === "tag" && jsxElement.tag === "img") {
      jsxElement.props.src = jsxElement.props.src + "?" + process.env.BUILD_TIME;
    }
    return jsxToString.call(this, jsxElement);
  };
}
`}
          />
          <Highlight title="Learn more" icon={<IconAttention />}>
            <p>
              For all the advanced features provided by the{" "}
              <code>jsx-async-runtime</code>, have a look at the{" "}
              <a
                href="https://github.com/jeasx/jsx-async-runtime/blob/main/example/src/App.jsx"
                target="_blank"
              >
                example application
              </a>{" "}
              in the GitHub-Repository.
            </p>
          </Highlight>
        </Article>
        <Next link="/routes" label="How to create routes (aka pages)?" />
      </Content>
    </Layout>
  );
}
