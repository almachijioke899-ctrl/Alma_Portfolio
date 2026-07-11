/* =========================================
   MOBILE MENU TOGGLE
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});


/* =========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});


/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   FADE-IN ANIMATION
========================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(
".hero, .about-preview, .skills, .projects, .video, .cta"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================================
   NAVBAR SHADOW
========================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});