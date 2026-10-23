addEventListener("load", () => {
  document.querySelectorAll("[data-navigation-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      const navigation = document.getElementById("mobile-navigation");
      navigation.hidden = !navigation.hidden;
    });
  });
});
