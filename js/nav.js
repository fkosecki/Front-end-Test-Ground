const
    menuBtn = document.querySelector(".buttons .fa-bars"),
    navMenu = document.querySelector("nav");

menuBtn.addEventListener('click', function () {
    navMenu.classList.toggle("show-menu");
});