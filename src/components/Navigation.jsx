export default function Navigation() {
  return (
    <nav class="nav">
      <ul class="nav-sections">
        {NAV_ITEMS.map(({ label, links }) => (
          <li>
            <h2 class="nav-heading">{label}</h2>
            <ul class="nav-links">
              {links.map(({ label, link }) => (
                <li>
                  <a
                    class="nav-link"
                    aria-current={this.request.path === link ? "page" : undefined}
                    href={link}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const NAV_ITEMS = [
  {
    label: "Introduction",
    links: [
      { label: "Philosophy", link: "/philosophy" },
      { label: "Getting started", link: "/quickstart" },
    ],
  },
  {
    label: "Essentials",
    links: [
      { label: "JSX & MDX", link: "/jsx" },
      { label: "Routes & Guards", link: "/routes" },
      { label: "CSS & JavaScript", link: "/browser" },
      { label: "Configuration", link: "/configuration" },
      { label: "Hosting", link: "/hosting" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "FAQ", link: "/faq" },
      { label: "News", link: "/news" },
      { label: "Showcases", link: "/showcases" },
    ],
  },
  {
    label: "Contributing",
    links: [
      { label: "Contact", link: "/contact" },
      { label: "License", link: "/license" },
    ],
  },
];
