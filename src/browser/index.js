// sidebar-toogle

addEventListener("load", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  sidebarToggle.addEventListener("click", (event) => {
    sidebar.classList.toggle("inactive");
  });
});

// scroll-restore

addEventListener("pagehide", saveScrollPosition);
addEventListener("load", restoreScrollPosition);

function saveScrollPosition() {
  if (window.scrollX || window.scrollY) {
    window.sessionStorage.setItem(
      "@scroll-restore",
      JSON.stringify({
        pathname: window.location.pathname,
        x: Math.round(window.scrollX),
        y: Math.round(window.scrollY),
      })
    );
  }
}

function restoreScrollPosition() {
  if (window.sessionStorage.getItem("@scroll-restore")) {
    const scrollPosition = JSON.parse(
      window.sessionStorage.getItem("@scroll-restore")
    );

    console.log(window.location.pathname);
    if (window.location.pathname === scrollPosition.pathname) {
      window.scroll(scrollPosition.x, scrollPosition.y);
    }

    window.sessionStorage.removeItem("@scroll-restore");
  }
}
