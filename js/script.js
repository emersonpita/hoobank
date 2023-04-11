"use strict";
const navigationLinks = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll('#inicio, #sobre, #beneficios, #solucoes');
window.addEventListener('scroll', function () {
    for (let i = 0; i < sections.length; i++) {
        const sectionRect = sections[i].getBoundingClientRect();
        if (sectionRect.top <= 200 && sectionRect.bottom >= 200) {
            navigationLinks[i].classList.add('active');
        }
        else {
            navigationLinks[i].classList.remove('active');
        }
    }
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header === null || header === void 0 ? void 0 : header.classList.add('scroll');
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove('scroll');
    }
});
const checkbox = document.querySelector("#hamburguer-menu");
const navMenu = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav-mobile a");
navLinks === null || navLinks === void 0 ? void 0 : navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (checkbox) {
            checkbox.checked = false;
        }
    });
});
