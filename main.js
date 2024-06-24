"use strict";

// Access navigation classes
const navHamburger = document.getElementById("nav-hamburger");
const navLinks = document.getElementById("nav-links");

// Function's
const handleNavHamburger = () => {
    // Toggle the 'visible' class on navLinks
    navLinks.classList.toggle("visible");

    // Toggle hamburger icon based on navLinks visibility
    if (navLinks.classList.contains("visible")) {
        navHamburger.src = "/assets/images/icon-close-menu.svg";
    } else {
        navHamburger.src = "/assets/images/icon-hamburger.svg";
    }
}
// Handle Click
navHamburger.addEventListener("click", handleNavHamburger)

