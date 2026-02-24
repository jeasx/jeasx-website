// import "prismjs";
// import "prismjs/components/prism-bash";
// import "prismjs/components/prism-docker";
// import "prismjs/components/prism-ini";
// import "prismjs/components/prism-json";
// import "prismjs/components/prism-jsx";

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
    window
      .open(`https://www.ecosia.org/search?q=%22jeasx%22+${encodeURIComponent(q)}`, "_blank")
      .focus();
  });
});
