export default function Feature({ headline, link, icon, children }) {
  return (
    <div class="feature">
      <div class="feature-hover"></div>
      <div class="feature-body">
        {icon}
        <h2 class="feature-title">
          <a href={link}>
            <span class="feature-link-area"></span>
            {headline}
          </a>
        </h2>
        <p class="feature-text">{children}</p>
      </div>
    </div>
  );
}
