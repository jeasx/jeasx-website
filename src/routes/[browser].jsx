import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Browser({}) {
  return (
    <Layout
      title="CSS &amp; JavaScript"
      description="How to handle assets for use in a web browser"
    >
      <p>
        Browser assets are stored in two distinct folders, based on whether
        these assets require processing or not.
      </p>

      <h2>Static Assets</h2>
      <p>
        Any assets that do not require processing (e.g., fonts, robots.txt,
        icons) should be placed in the <code>/public</code> directory. They will
        be served as static files from the root directory.
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
        minification should be stored in the src/browser directory and must be
        named as <code>index.[css|js|jsx|ts|tsx]</code>. Only index files serve
        as bundle entries and are accessible to the client. This approach offers
        flexibility in creating a custom directory layout.
      </p>
      <table>
        <tr>
          <th width="50%">Route path</th>
          <th width="50%">URL</th>
        </tr>
        <tr>
          <td>browser/src/index.css</td>
          <td>/index.css</td>
        </tr>
        <tr>
          <td>browser/src/custom/index.js</td>
          <td>/custom/index.js</td>
        </tr>
        <tr>
          <td>browser/src/utils/date.js</td>
          <td>This file will be not available via an url.</td>
        </tr>
      </table>
      <div class="box">
        <h3>Shared code</h3>
        <p>
          You have the flexibility to share code between the server and browser.
          When you import code from outside the browser directory into a browser
          bundle, jeasx automatically rebuilds the bundle upon file changes.
          Conversely, importing code from the browser directory into server code
          does not trigger a rebuild. This approach optimizes build performance
          during development by efficiently minimizing unnecessary rebuilds, as
          jeasx is primarily a server framework.
        </p>
      </div>
    </Layout>
  );
}
