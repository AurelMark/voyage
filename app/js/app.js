const barsMenu = document.querySelector(".fas.fa-bars"),
  menuWrapper = document.querySelector(".menu__wrapper");
barsMenu.addEventListener("click", () => {
  if (menuWrapper.classList.contains("show")) {
    menuWrapper.classList.remove("show", "fade");
  } else {
    menuWrapper.classList.add("show", "fade");
  }
});
