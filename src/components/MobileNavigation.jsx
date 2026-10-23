import Navigation from "./Navigation";

export default function MobileNavigation() {
  return (
    <div id="mobile-navigation">
      <div>
        <button
          type="button"
          aria-hidden="true"
          style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
        ></button>
        <div>
          <div
            class="mobile-nav"
            aria-label="Navigation"
            role="dialog"
            tabindex="-1"
            aria-modal="true"
          >
            <div class="mobile-nav-panel">
              <div class="mobile-nav-header">
                <button data-navigation-toggle type="button" aria-label="Close navigation">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    class="menu-icon"
                  >
                    <path d="M5 5l14 14M19 5l-14 14"></path>
                  </svg>
                </button>
                <a class="mobile-nav-home" aria-label="Home page" href="/">
                  <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" class="logo">
                    <g fill="none" stroke="#38BDF8" stroke-linejoin="round" stroke-width="3">
                      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z"></path>
                      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="mobile-nav-body">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-hidden="true"
          style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
        ></button>
      </div>
    </div>
  );
}
