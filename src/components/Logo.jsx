/**
 * Jeasx logo: a JSX tag "</>" whose slash is an ease-in-out curve.
 */
export default function Logo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" class="logo">
      <defs>
        <linearGradient id="logo-tile" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#7DD3FC" />
          <stop offset="1" stop-color="#0EA5E9" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill="url(#logo-tile)" />
      <g stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11.5 12.5 6.5 18l5 5.5" />
        <path d="M24.5 12.5 29.5 18l-5 5.5" />
        <path d="M15.5 23.5C17.75 23.5 18.25 12.5 20.5 12.5" />
      </g>
    </svg>
  );
}
