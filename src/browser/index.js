import "prismjs";

window.addEventListener("load", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  // const mediaQuery = window.matchMedia("(min-width: 1280px)");
  // if (mediaQuery.matches) {
  //   sidebar.classList.toggle("inactive");
  // }

  sidebarToggle.style.display = "block";
  sidebarToggle.addEventListener("click", (event) => {
    sidebar.classList.toggle("inactive");
  });
});
