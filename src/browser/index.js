addEventListener("load", () => {
  document.querySelectorAll("[data-navigation-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("mobile-navigation").classList.toggle("hidden");
    });
  });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // @ts-ignore
    const q = document.getElementById("search-input").value;
    window.open(`https://www.mojeek.com/search?q=jeasx+${encodeURIComponent(q)}`, "_blank").focus();
  });
});
