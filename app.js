//menu

const hamburger = document.querySelector(".nav-hamburger");
hamburger.addEventListener("click", () => {
    const menuContainer = document.querySelector(".nav");
    hamburger.classList.toggle("active");
    menuContainer.classList.toggle("nav-active");

    const navitem = document.querySelectorAll(".nav__item");
    navitem.forEach(item => {
        item.addEventListener("click", () => {
            menuContainer.classList.remove("nav-active");         
        });
    }); 

});

//letas del header

document.addEventListener("DOMContentLoaded",() => {
    const menu = document.querySelector(".nav");
    setTimeout(() => {
        menu.removeAttribute("hidden")
    },1000);
});
const typed = new Typed(".typed",{
    strings: [
            "<b class='title__item'>Estudiante</b>",
            "<b class='title__item'>Front-End Developer</b>",
            "<b class='title__item'>Maquetador web</b>"
    ],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: "html",
});