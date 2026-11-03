addEventListener("load", () => {
  document.querySelectorAll("[data-navigation-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      document.getElementById("mobile-navigation").classList.toggle("open");
    });
  });

  // Add a "copy to clipboard" button to every code block
  document.querySelectorAll("pre").forEach((pre) => {
    const wrapper = document.createElement("div");
    wrapper.className = "copy-code";
    pre.replaceWith(wrapper);
    wrapper.append(pre);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code-button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code") ?? pre;
      try {
        await navigator.clipboard.writeText(code.innerText.replace(/\n$/, ""));
        button.textContent = "Copied!";
      } catch {
        button.textContent = "Failed";
      }
      setTimeout(() => (button.textContent = "Copy"), 2000);
    });
    wrapper.append(button);
  });
});
