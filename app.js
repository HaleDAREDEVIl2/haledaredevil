const mobileMenu = document.getElementById("mobile-menu");
const menu = document.querySelector(".navbar__menu");

mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
});
