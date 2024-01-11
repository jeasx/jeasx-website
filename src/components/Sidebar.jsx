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
              <a href="/getting-started">Getting started</a>
            </li>
            <li>
              <span>Routes</span>
              <ul>
                <li>
                  <a href="/endpoints">Endpoints</a>
                </li>
                <li>
                  <a href="/paths">Paths</a>
                </li>
                <li>
                  <a href="/guards">Guards</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Browser</span>
              <ul>
                <li>
                  <a href="/assets">Assets</a>
                </li>
                <li>
                  <a href="/css">CSS</a>
                </li>
                <li>
                  <a href="/javascript">Javascript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/deployment">Deployment</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
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
          <p class="copyright">&copy; Maik Jablonski (Neoskop GmbH)</p>
        </footer>
      </div>
      <a id="sidebar-toggle" href="javascript: return void;" class="toggle">
        Toggle
      </a>
    </div>
  );
}
