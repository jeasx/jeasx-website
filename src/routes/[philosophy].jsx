import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Generic({}) {
  return (
    <Layout title="jeasx - JSX with Ease" description="Homepage">
      <section>
        <header class="main">
          <h1>Philosophy</h1>
        </header>
        <p>
          Web applications have historically relied on server-rendered HTML and
          traditional navigation patterns. However, the evolution of the Web
          Platform led to the emergence of technologies like AJAX, enabling
          dynamic updates without full page reloads. As JavaScript advanced,
          browser-based applications such as React transformed the traditional
          client-server architecture into a more interactive and dynamic
          approach.
        </p>
        <p>
          While modern web applications often rely heavily on client-side
          JavaScript, many websites and applications involve simpler CRUD
          operations, making the modern Single Page Application (SPA) approach
          excessive for these cases. Furthermore, the historical association of
          server-side rendering with more or less obscure templating
          technologies has been overcome by leveraging the most powerful feature
          of React - JSX - in server-side rendering. This streamlined approach
          simplifies web development, making it more accessible for developers
          to create powerful and efficient websites.
        </p>
      </section>
    </Layout>
  );
}
