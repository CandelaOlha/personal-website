const openMobileMenu = document.querySelector(".hamburger-menu");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

// Mobile menu functions

openMobileMenu.onclick = () => {
    mobileMenu.classList.add("show-mobile-menu");
}

closeMobileMenu.onclick = () => {
    mobileMenu.classList.remove("show-mobile-menu");
}

for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].onclick = () => {
        mobileMenu.classList.remove("show-mobile-menu");
    }
}