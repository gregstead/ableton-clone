const menuTrigger = document.querySelector(".js-main-nav-trigger");
const header = document.querySelector("header");

menuTrigger.addEventListener("click", () => {
  header.classList.toggle("is-expanded");
});
