import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Generic({}) {
  return (
    <Layout
      title="Philosophy"
      description="Returning to the future: server-side rendering with a modern developer experience"
    >
      <p>
        Web applications have historically relied on server-rendered HTML and
        traditional navigation patterns. However, the evolution of the web
        platform led to the emergence of technologies like AJAX, enabling
        dynamic updates without full page reloads. As JavaScript advanced,
        browser-based applications such as React transformed the traditional
        client-server architecture into a more interactive and dynamic approach.
      </p>
      <p>
        In the dynamic world of web development, the prevalence of client-side
        JavaScript in modern web applications is undeniable. However, many
        content driven websites and applications do not require the complexity
        of the Single Page Application (SPA) approach. As the industry faces
        challenges such as SEO limitations and performance issues on mobile
        devices, a new wave of dynamic static site generators has emerged to
        tackle these issues head-on. This exhilarating journey culminates with
        the introduction of React Server Components (RSC), representing a
        significant shift towards server-side rendering of markup. This brings
        us full circle to the roots of web development, with a modern twist on
        rendering markup on the server, providing an enhanced developer
        experience.
      </p>
      <p>
        Now is the time to streamline and eliminate the unnecessary complexities
        that have accumulated during the evolution from AJAX to SSG to RSC. The
        historical association of server-side rendering with more or less
        obscure templating technologies has been overcome by leveraging the most
        powerful feature of React - JSX - in server-side rendering. This
        streamlined approach simplifies web development, making it more
        accessible for developers to create powerful and efficient websites.
      </p>
      <p>
        <strong>
          Introducing jeasx – the server side rendering framework on top of JSX
          designed for the era of simplicity.
        </strong>
      </p>
      <a href="/quickstart" class="button">
        Get started
      </a>
    </Layout>
  );
}
