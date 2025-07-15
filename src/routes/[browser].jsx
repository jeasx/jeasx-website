import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Lead from "../components/Lead";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout
      title="CSS &amp; JavaScript"
      description="How to handle assets for use in a web browser"
    >
      <Content>
        <Article
          category="CSS &amp; JavaScript"
          headline="How to handle assets for use in a web browser"
        >
          <Lead>
            Browser assets are stored in two distinct folders, based on whether
            these assets require processing or not.
          </Lead>
          <h2>Static Assets</h2>
          <p>
            Any assets that do not require processing (e.g., fonts, robots.txt,
            icons) should be placed in the <code>/public</code> directory. They
            will be served as static files from the root directory.
          </p>
          <table>
            <tr>
              <th style="width:50%">Route path</th>
              <th style="width:50%">URL</th>
            </tr>
            <tr>
              <td>public/robots.txt</td>
              <td>/robots.txt</td>
            </tr>
            <tr>
              <td>public/fonts/ubuntu.woff2</td>
              <td>/fonts/ubuntu.woff2</td>
            </tr>
          </table>
          <h2>CSS & JavaScript</h2>
          <p>
            CSS, JavaScript, or TypeScript files that require processing and
            minification should be stored in the src/browser directory and must
            be named as <code>index.[css|js|jsx|ts|tsx]</code>. Only index files
            serve as bundle entries and are accessible to the client. This
            approach offers flexibility in creating a custom directory layout.
          </p>
          <table>
            <tr>
              <th style="width:50%">Route path</th>
              <th style="width:50%">URL</th>
            </tr>
            <tr>
              <td>src/browser/index.css</td>
              <td>/index.css</td>
            </tr>
            <tr>
              <td>src/browser/custom/index.js</td>
              <td>/custom/index.js</td>
            </tr>
            <tr>
              <td>src/browser/utils/date.js</td>
              <td>This file will be not available via an url.</td>
            </tr>
          </table>
          <p>
            <b>Please note:</b> as JavaScript or TypeScript is compiled to{" "}
            <a href="https://esbuild.github.io/api/#format-esm" target="_blank">
              ECMAScript modules (ESM) via esbuild
            </a>
            , you should add <code>type="module"</code> to your script tags to
            avoid subtle errors.
          </p>
        </Article>
        <Next
          link="/configuration"
          label="How to configure Jease via environment?"
        />
      </Content>
    </Layout>
  );
}
