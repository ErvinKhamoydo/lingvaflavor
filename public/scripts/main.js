"use strict";$(document).ready(function(){new Swiper(".swiper-container-main",{loop:!0,navigation:{nextEl:".main-slider-next",prevEl:".main-slider-prev"},pagination:{el:".swiper-pagination",type:"bullets"},speed:1e3});function e(e){$(e).bind("keypress",function(e){e.key.match(/[^a-z 0-9 @ \. \- \_]/gi)&&e.preventDefault()})}function t(n,a){var s=$(n);s.on("click",function(e){var t=e.target,i=$(n+" > div").index(e.target);s.children().removeClass("button-test-active"),$(t).addClass("button-test-active"),$(a+" > .courses-price-wrapper-card-content-duration-table-content").css("display","none"),$(a+" > .courses-price-wrapper-card-content-duration-table-content:eq("+i+")").css("display","flex")})}$(".hamburger").click(function(){$(".hamburger-menu").toggleClass("active"),$(".mobile-menu").toggleClass("active")}),$(".mobile-menu__link-drop").click(function(){$(".mobile-menu__courses").toggleClass("active"),$(".mobile-menu__link-drop-icon").toggleClass("active")}),$(".footer-top-btn").click(function(){$("html, body").animate({scrollTop:0},1e3)}),e('[name="user_skype"]'),e('[type="email"]'),t(".standart",".standart-price"),t(".exam",".exam-price"),t(".asian",".asian-price"),t(".arabian",".arabian-price");var i,n;i=".price-questions-accordion-heading",(n=document.querySelectorAll(i)).forEach(function(e){e.addEventListener("click",function(){n.forEach(function(e){e.classList.remove("active-style"),e.nextElementSibling.classList.remove("active-content"),e.nextElementSibling.style.maxHeight="0px"}),this.classList.toggle("active-style"),this.nextElementSibling.classList.toggle("active-content"),this.classList.contains("active-style")?this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+80+"px":this.nextElementSibling.style.maxHeight="0px"})})});