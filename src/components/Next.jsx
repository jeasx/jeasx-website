export default function Next({ label, link }) {
  return (
    <dl class="next">
      <div class="next-inner">
        <dt class="next-label">Next</dt>
        <dd class="next-item">
          <a class="next-link" href={link}>
            {label}
            <svg viewBox="0 0 16 16" aria-hidden="true" class="next-icon">
              <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
            </svg>
          </a>
        </dd>
      </div>
    </dl>
  );
}
