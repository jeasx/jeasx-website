import "prismjs";

window.addEventListener("load", () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  sidebarToggle.addEventListener("click", (event) => {
    sidebar.classList.toggle("inactive");
  });
});
