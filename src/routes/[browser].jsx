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
export default function Browser({}) {
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
          <p class="lead">
            Browser assets are stored in two distinct folders, based on whether
            these assets require processing or not.
          </p>
          <h2>Static Assets</h2>
          <p>
            Any assets that do not require processing (e.g., fonts, robots.txt,
            icons) should be placed in the <code>/public</code> directory. They
            will be served as static files from the root directory.
          </p>
          <table>
            <tr>
              <th width="50%">Route path</th>
              <th width="50%">URL</th>
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
              <th width="50%">Route path</th>
              <th width="50%">URL</th>
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
          <Highlight title="Shared code" icon={<IconAttention />}>
            <p>
              While you have the flexibility to share code between the server
              and browser, this is typically an edge case, as the DOM is not
              relevant on the server side, and node core modules are not
              compatible with the browser. To optimize build performance during
              development by efficiently minimizing unnecessary rebuilds, no
              rebuild is triggered when shared code changes per default.
            </p>
          </Highlight>
          <p>
            You can easily configure additional paths which should be watched
            for building the browser bundles via an environment variable:
          </p>
          <Code source={`JEASX_BUILD_JS_WATCH="src/browser,src/shared"`} />
        </Article>
        <Next
          link="/configuration"
          label="How to configure Jease via environment?"
        />
      </Content>
    </Layout>
  );
}
