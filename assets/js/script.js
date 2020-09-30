/* ================ Membuat menu ketika toggle di klik ====================== */

/*=============== dengan vanila javacsript ================*/

// const menuToggle = document.querySelector(".menu-toggle input");
// const nav = document.querySelector("nav ul");

// menuToggle.addEventListener('click', function () {
//     nav.classList.toggle('slide');
// });

/*================== Jquery ====================*/

$(".menu-toggle input").on("click", function () {
    $("nav ul").toggleClass("slide");
});