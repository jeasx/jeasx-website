import Article from "../components/Article";
import Content from "../components/Content";
import Highlight from "../components/Highlight";
import Layout from "../components/Layout";
import Next from "../components/Next";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Philosophy({}) {
  return (
    <Layout
      title="Philosophy"
      description="Back to the future: server-side rendering with a modern developer experience"
    >
      <Content>
        <Article category="Philosophy" headline="Back to the future">
          <p class="lead">
            Web applications have historically relied on server-rendered HTML
            and traditional navigation patterns. However, the evolution of the
            web platform led to the emergence of technologies like AJAX,
            enabling dynamic updates without full page reloads.
          </p>
          <p>
            As JavaScript advanced, browser-based libraries (React) and
            frameworks (Angular) transformed the traditional client-server
            architecture into a more interactive and dynamic approach.
          </p>
          <h2>Full cirlce of JavaScript</h2>
          <p>
            In the dynamic world of web development, the prevalence of
            client-side JavaScript in modern web applications is undeniable.
            However, the majority of content driven websites and many web
            applications do not require the complexity of the Single Page
            Application (SPA) approach. As the industry faces challenges such as
            SEO limitations and performance issues on mobile devices, a new wave
            of{" "}
            <a href="https://jamstack.org/generators/" target="_blank">
              static site generators
            </a>{" "}
            (SSG) has emerged to tackle these issues head-on, generating new
            problems like hydration errors and bloated JavaScript bundles along
            the way. This exhilarating journey culminates with the introduction
            of{" "}
            <a
              href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
              target="_blank"
            >
              React Server Components
            </a>{" "}
            (RSC), representing a significant shift towards server-side
            rendering of markup. This brings us full circle to the roots of web
            development, with a modern twist on rendering markup on the server,
            providing an enhanced developer experience.
          </p>
          <h2>Less is more</h2>
          <p>
            Now is the time to streamline and eliminate the unnecessary
            complexities that have accumulated during the evolution from AJAX to
            SSG to RSC. The historical association of server-side rendering with
            more or less obscure templating technologies has been overcome by
            leveraging the most powerful feature introduced by React - JSX - in
            server-side rendering. This streamlined approach simplifies web
            development, making it more accessible for developers to create
            powerful and efficient websites.
          </p>
          <p>
            Projects like{" "}
            <a href="https://astro.build/" target="_blank">
              Astro
            </a>{" "}
            and <a href="https://fresh.deno.dev/">Fresh</a> exemplify a new era
            of learning from the past and exploring innovative approaches, e.g.
            the{" "}
            <a
              href="https://jasonformat.com/islands-architecture/"
              target="_blank"
            >
              island architecture
            </a>
            . While these projects offer valuable insights, they may not be
            perfect from every perspective:
            <ul>
              <li>
                Astro utilizes a JSX-like syntax for its template files with
                code blocks separated by dashes, requiring a dedicated IDE
                plugin and a special compiler for code transformation.
              </li>
              <li>
                On the other hand, Fresh relies on Deno, which may not comply
                with your corporate policies or hosting requirements.
              </li>
            </ul>
          </p>
          <p>
            Astro and Fresh are great products, but they try to pack many
            features into the framework itself. This "all-batteries-included"
            approach might be convenient at first, but can lead to maintenance
            problems in the long run since the framework is tightly coupled with
            the application code.
          </p>
          <Highlight title="Sometimes it's beneficial to have choices...">
            <p>
              One of the main goals of Jeasx is to focus on the core (about 100
              lines of code) and let all customizations be done in userland.
              This gives you a rock solid foundation with a simple rule: if your
              code works, it just works. And there's no need to worry about
              framework updates.
            </p>
            <p>
              Introducing Jeasx – the server side rendering framework on top of
              JSX designed for the era of simplicity...
            </p>
          </Highlight>
        </Article>
        <Next label="Get Started" link="/quickstart" />
      </Content>
    </Layout>
  );
}
