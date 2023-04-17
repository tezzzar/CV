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
    autoplay: false,
    dots: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  });
});

let toggle = document.querySelector(".toggle");
let about = document.querySelector(".about");
let arrow = document.querySelector(".arrow");
let slider = document.querySelector(".block-shadow");
let portfolio = document.querySelector(".portfolio");
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
tab1.addEventListener("click", function () {
  tab1.classList.add("tab-bg", "font-bold");
  tab2.classList.remove("tab-bg", "font-bold");
  tab3.classList.remove("tab-bg", "font-bold");
  slider.classList.remove("hide");
  about.classList.remove("show");
  portfolio.classList.add("hide");
});
tab2.addEventListener("click", function () {
  tab1.classList.remove("tab-bg", "font-bold");
  tab2.classList.add("tab-bg", "font-bold");
  tab3.classList.remove("tab-bg", "font-bold");
  slider.classList.add("hide");
  about.classList.add("show");
  portfolio.classList.add("hide");
});
tab3.addEventListener("click", function () {
  tab1.classList.remove("tab-bg", "font-bold");
  tab2.classList.remove("tab-bg", "font-bold");
  tab3.classList.add("tab-bg", "font-bold");
  slider.classList.add("hide");
  about.classList.remove("show");
  portfolio.classList.remove("hide");
});
