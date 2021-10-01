console.log("hola")

const openMobileMenu = document.querySelector(".hamburger-menu");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");

openMobileMenu.onclick = () => {
    mobileMenu.classList.add("show-mobile-menu");
}

closeMobileMenu.onclick = () => {
    mobileMenu.classList.remove("show-mobile-menu");
}