import Article from "../components/Article";
import Code from "../components/Code";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import IconAttention from "../components/icons/IconAttention";
import Layout from "../components/Layout";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function JSX({}) {
  return (
    <Layout title="JSX &amp; SSR" description="Understanding JSX">
      <Content>
        <Article
          category="JSX &amp; SSR"
          headline="Server-side rendering of JSX"
        >
          <p class="lead">
            Jeasx is a server-side rendering (SSR) framework based on JSX, which
            means that all of your code is executed on the server and the
            resulting HTML is sent to the client. JSX is a great templating
            technology due to its simplicity if you are familiar with the basics
            of JavaScript.
          </p>
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
          <h2>JSX in Jeasx is a little bit different</h2>
          <p>
            Jeasx uses a syntax similar to React, but there are some important
            differences. Under the hood an dedicated{" "}
            <a
              href="https://github.com/jeasx/jsx-async-runtime"
              target="_blank"
            >
              asynchronous JSX runtime
            </a>{" "}
            is used, which is optimized for performant server-side rendering.
          </p>
          <ul>
            <li>
              You can use asynchronous code out of the box, just mark your
              component as <code>async</code> and feel free to use{" "}
              <code>await</code> to resolve promises.
            </li>
            <li>
              Attribute names are the same as in HTML, therefore use{" "}
              <code>class</code> instead of <code>className</code>.
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
          </ul>
          <h3>
            Here's an example which shows all the differences in a single file:
          </h3>
          <Code
            source={
              /*js*/ `export default async function Jokes() {
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
          <div class={["v-align","h-align"]}>
            <h1
              class={{ center: true, "my-class": true, "my-other-class": false }}
              style="color: white"
            >
              {value}
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
          <Highlight title="Learn more" icon={<IconAttention />}>
            <p>
              For all the advanced features provided by the asynchronous JSX
              runtime, have a look at the{" "}
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
