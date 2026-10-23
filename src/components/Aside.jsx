export default function Aside({ links }) {
  return (
    <div class="aside">
      <nav aria-labelledby="on-this-page-title" class="aside-nav">
        <h2 id="on-this-page-title" class="aside-title">
          On this page
        </h2>
        <ol class="aside-links">
          {links.map(({ label, link, links }) => (
            <li>
              <h3>
                <a class="aside-link" href={link}>
                  {label}
                </a>
              </h3>
              {links && (
                <ol class="aside-sublinks">
                  {links.map(({ label, link }) => (
                    <li>
                      <a class="aside-sublink" href={link}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
