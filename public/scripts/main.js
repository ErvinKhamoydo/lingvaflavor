"use strict";$(document).ready(function(){new Swiper(".swiper-container-main",{loop:!0,navigation:{nextEl:".main-slider-next",prevEl:".main-slider-prev"},pagination:{el:".swiper-pagination",type:"bullets"},autoplay:{delay:6e3},speed:1e3});$(".hamburger").click(function(){$(".hamburger-menu").toggleClass("active"),$(".mobile-menu").toggleClass("active")}),$(".mobile-menu__link-drop").click(function(){$(".mobile-menu__courses").toggleClass("active"),$(".mobile-menu__link-drop-icon").toggleClass("active")}),$(".footer-top-btn").click(function(){$("html, body").animate({scrollTop:0},1e3)})});