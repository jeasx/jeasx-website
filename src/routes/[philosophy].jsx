import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Philosophy({}) {
  return (
    <Layout
      title="Philosophy"
      description="Back to the future: server-side rendering with a modern developer experience"
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
        devices, a new wave of
        <a href="https://jamstack.org/generators/" target="_blank">
          static site generators
        </a>
        (SSG) has emerged to tackle these issues head-on, generating new
        problems like
        <a
          href="https://nextjs.org/docs/messages/react-hydration-error"
          target="_blank"
        >
          hydration errors
        </a>
        along the way. This exhilarating journey culminates with the
        introduction of
        <a
          href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
          target="_blank"
        >
          React Server Components
        </a>
        (RSC), representing a significant shift towards server-side rendering of
        markup. This brings us full circle to the roots of web development, with
        a modern twist on rendering markup on the server, providing an enhanced
        developer experience.
      </p>
      <p>
        Now is the time to streamline and eliminate the unnecessary complexities
        that have accumulated during the evolution from AJAX to SSG to RSC. The
        historical association of server-side rendering with more or less
        obscure templating technologies has been overcome by leveraging the most
        powerful feature introduced by React - JSX - in server-side rendering.
        This streamlined approach simplifies web development, making it more
        accessible for developers to create powerful and efficient websites.
      </p>
      <p>
        Projects like
        <a href="https://astro.build/" target="_blank">
          Astro
        </a>
        and <a href="https://fresh.deno.dev/">Fresh</a> exemplify a new era of
        learning from the past and exploring innovative approaches. While these
        projects offer valuable insights, they may not be perfect from every
        perspective: Astro utilizes a special syntax for its template files,
        requiring IDE plugins and a complex compiler for code execution, whereas
        Fresh relies on Deno, which may not align with your hosting
        requirements.
      </p>
      <p>Sometimes it's beneficial to have choices...</p>
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
