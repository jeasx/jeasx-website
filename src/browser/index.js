addEventListener("load", () => {
  document.querySelectorAll("[data-navigation-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("mobile-navigation").classList.toggle("hidden");
    });
  });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("search-input");
    if (input instanceof HTMLInputElement) {
      window
        .open(`https://www.mojeek.com/search?q=jeasx+${encodeURIComponent(input.value)}`, "_blank")
        .focus();
    }
  });
});
