export default function Header() {
  return (
    <header id="header">
      <a href="/" class="logo">
        <strong>jeasx</strong> &ndash; JSX with Ease
      </a>
      <ul class="icons">
        <li>
          <a href="https://github.com/orgs/jeasx/repositories" class="icon">
            <img
              src="/images/github.svg"
              width="32"
              height="32"
              alt="GitHub Logo"
            />
            <span class="label">GitHub Repositories</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
