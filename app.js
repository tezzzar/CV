$(document).ready(function () {
  $(".slider-top").slick({
    adaptiveHeight: true,
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});
$(document).ready(function () {
  $(".slider-main").slick({
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  });
});

let toggle = document.querySelector(".toggle");
let about = document.querySelector(".about");
toggle.addEventListener("click", function () {
  about.classList.toggle("show");
});

console.log(toggle);
console.log(about);
