import Article from "../components/Article";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Lead from "../components/Lead";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({}) {
  return (
    <Layout title="Hosting" description="How to host a Jeasx application">
      <Content>
        <Article
          category="Hosting"
          headline="What are the hosting options for a Jeasx project?"
        >
          <Lead>
            Jeasx supports various hosting modes tailored to different needs and
            preferences. You can host Jeasx on a dedicated server or VPS, deploy
            it via a Docker container, or opt for a serverless approach.
          </Lead>
          <h2>Hosting on a dedicated / virtual private server (VPS)</h2>
          <p>
            Typically, a Jeasx application requires around 50 MB of RAM and a
            single (v)CPU. Therefore the smallest server should get you started.
            Running Jeasx on a server involves installing Node.js (or Bun),
            building the application with <code>npm run build</code> and
            starting it with <code>npm start</code>. I highly recommend to use a
            process manager like{" "}
            <a href="https://pm2.io" target="_blank">
              pm2
            </a>{" "}
            to keep your application running.
          </p>
          <p>
            To keep the footprint of Jeasx minimal, it does not include built-in
            HTTPS support. Therefore, you'll need to deploy a reverse proxy like{" "}
            <a href="https://caddyserver.com" target="_blank">
              Caddy
            </a>{" "}
            in front of Jeasx to handle SSL termination.
          </p>
          <h2>Container based hosting</h2>
          <p>
            An powerful self-hosted option is to install{" "}
            <a href="https://dokploy.com" target="_blank">
              Dokploy
            </a>{" "}
            on your server. Dokploy uses Docker under the hood and comes with a
            nice user interface to create deployments directly from GitHub.
          </p>
          <p>
            For straightforward Node.js-based hosting, platforms like{" "}
            <a href="https://railway.app" target="_blank">
              Railway
            </a>{" "}
            and{" "}
            <a href="https://www.koyeb.com" target="_blank">
              Koyeb
            </a>{" "}
            are excellent choices. Both support deploying Docker containers,
            which I highly recommend as the default builders (e.g., Railpack /
            Buildpack) create containers that use significantly more resources
            than the optimized Dockerfile provided via the quickstart template.
          </p>
          <p>
            If you prefer Docker containers exclusively with a fixed pricing
            model,{" "}
            <a href="https://sliplane.io" target="_blank">
              Sliplane
            </a>{" "}
            is a viable option.
          </p>
          <h2>Serverless hosting</h2>
          <p>
            For a serverless setup,{" "}
            <a href="https://vercel.com" target="_blank">
              Vercel
            </a>{" "}
            is an option, as Jeasx can be bootstrapped with the necessary
            configurations via the quickstart template. Other serverless
            platforms should work with additional configurations, but I haven't
            tested any of them.
          </p>
        </Article>
      </Content>
    </Layout>
  );
}
