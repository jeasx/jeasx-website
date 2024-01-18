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

        {/* <span class="image main">
          <img src="/images/placeholder.webp" alt="" />
        </span> */}

        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit.
        </p>

        <hr class="major" />

        <h2>Interdum sed dapibus</h2>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit
          amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat.
          Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna
          ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque
          enim turpis, hendrerit.
        </p>
      </section>
    </Layout>
  );
}
