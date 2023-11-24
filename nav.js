const mobile_nav = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

const toggleNavnar = ()=>{
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavnar());