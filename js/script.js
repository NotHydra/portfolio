// qualification

const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification_active");
        });
        target.classList.add("qualification_active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification_active");
        });
        tab.classList.add("qualification_active");
    });
});

// portfolio

let swiperPortfolio = new Swiper(".portfolio_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

// type text

var typed = new Typed(".typing", {
    strings: ["Data Science", "Back-End Development", "Database Engineering"], //bisa tambahin sendiri kalo mau
    typeSpeed: 30,
    backSpeed: 5,
    loop: true,
});

// nav burger

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// animation

ScrollReveal({ origin: "left", distance: "41px", duration: 2000, reset: false }).reveal(".home-text", { delay: 200 });
ScrollReveal({ origin: "right", distance: "41px", duration: 2000, reset: false }).reveal(".home-img", { delay: 200 });
ScrollReveal({ origin: "left", distance: "41px", duration: 2000, reset: false }).reveal(".about-img", { delay: 200 });
ScrollReveal({ origin: "right", distance: "41px", duration: 2000, reset: false }).reveal(".scroll", { delay: 200 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-2", { delay: 1000 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-3", { delay: 1200 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".main-btn", { delay: 2000 });
ScrollReveal({ origin: "top", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-4", { delay: 200 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-5", { delay: 1400 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-6", { delay: 1800 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".scroll-7", { delay: 2200 });
ScrollReveal({ origin: "top", distance: "61px", duration: 2000, reset: false }).reveal(".section_title", { delay: 200 });
ScrollReveal({ origin: "top", distance: "61px", duration: 2000, reset: false }).reveal(".section_subtitle", { delay: 200 });
// ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".skill-item", { delay: 1200 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".qualification_container", { delay: 1200 });
ScrollReveal({ origin: "bottom", distance: "61px", duration: 2000, reset: false }).reveal(".qualification_sections", { delay: 1200 });
ScrollReveal({ origin: "top", distance: "61px", duration: 2000, reset: false }).reveal(".portfolio_container", { delay: 200 });
