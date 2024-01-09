export default function Sidebar() {
  return (
    <div id="sidebar" class="inactive">
      <div class="inner">
        <nav id="menu">
          <header class="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/generic">Generic</a>
            </li>
            <li>
              <a href="/elements">Elements</a>
            </li>
            <li>
              <span>Another Submenu</span>
              <ul>
                <li>
                  <a href="#">Lorem Dolor</a>
                </li>
                <li>
                  <a href="#">Ipsum Adipiscing</a>
                </li>
                <li>
                  <a href="#">Tempus Magna</a>
                </li>
                <li>
                  <a href="#">Feugiat Veroeros</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Etiam Dolore</a>
            </li>
            <li>
              <a href="#">Adipiscing</a>
            </li>
          </ul>
        </nav>

        <section>
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
        </section>

        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul class="contact">
            <li class="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li class="icon solid fa-phone">(000) 000-0000</li>
            <li class="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        <footer id="footer">
          <p class="copyright">
            &copy; Untitled. All rights reserved. Demo Images:{" "}
            <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
      <a id="sidebar-toggle" href="#" class="toggle">
        Toggle
      </a>
    </div>
  );
}
