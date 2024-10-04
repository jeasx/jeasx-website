import "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";

addEventListener("load", () => {
  document.querySelectorAll("[data-navigation-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("mobile-navigation").classList.toggle("hidden");
    });
  });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    // @ts-ignore
    document.getElementById("search-input").value += ' "jeasx"';
  });
});
