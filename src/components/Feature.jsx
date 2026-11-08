export default function Feature({ headline, link, icon, children }) {
  return (
    <div class="feature">
      <div class="feature-hover"></div>
      <div class="feature-body">
        <div class="feature-header">
          {icon}
          <h2 class="feature-title">
            <a href={link}>
              <span class="feature-link-area"></span>
              {headline}
            </a>
          </h2>
        </div>
        <p class="feature-text">{children}</p>
      </div>
    </div>
  );
}
