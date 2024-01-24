export default function Sidebar() {
  return (
    <div id="sidebar" class="inactive">
      <div class="inner">
        <nav id="menu">
          <header class="major">
            <h2>jeasx</h2>
          </header>
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/philosophy">Philosophy</a>
            </li>
            <li>
              <a href="/quickstart">Quickstart</a>
            </li>
            <li>
              <a href="/routes">Routes</a>
              <ul>
                <li>
                  <a href="/routes#endpoints">Endpoints</a>
                </li>
                <li>
                  <a href="/routes#paths">Paths</a>
                </li>
                <li>
                  <a href="/routes#guards">Guards</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/browser">Browser</a>
              <ul>
                <li>
                  <a href="/browser#static-assets">Static Assets</a>
                </li>
                <li>
                  <a href="/browser#css-js">CSS &amp; JavaScript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/showcase">Showcase</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </nav>

        {/* <section>
          <header class="major">
            <h2>Ante interdum</h2>
          </header>
          <div class="mini-posts">
            <article>
              <a href="#" class="image">
                <img src="/images/placeholder.webp" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
          <ul class="actions">
            <li>
              <a href="#" class="button">
                More
              </a>
            </li>
          </ul>
        </section> */}

        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            The development of jeasx is sponsored by
            <a href="https://www.neoskop.de" target="_blank">
              Neoskop.
            </a>
            If you want to get in touch, feel free to contact us.
          </p>
          <ul class="contact">
            <li class="icon solid fa-envelope">
              <a href="mailto:jeasx@neoskop.de">jeasx@neoskop.de</a>
            </li>
          </ul>
        </section>
        <footer id="footer">
          <p class="copyright">&copy; 2024 Maik Jablonski (Neoskop GmbH)</p>
        </footer>
      </div>
      <a id="sidebar-toggle" href="javascript: void(0);" class="toggle">
        Toggle
      </a>
    </div>
  );
}
