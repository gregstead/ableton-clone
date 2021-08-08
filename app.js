const menuTrigger = document.querySelector(".js-main-nav-trigger");
const header = document.querySelector("header");
const moreTrigger = document.querySelector(".main-nav__link-list__item > span");
const moreDiv = document.querySelector(".main-nav__more");

menuTrigger.addEventListener("click", () => {
  header.classList.toggle("is-expanded");
});

moreTrigger.addEventListener("click", () => {
  moreDiv.classList.toggle("show");
});
