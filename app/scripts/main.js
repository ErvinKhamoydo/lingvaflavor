$(document).ready(function () {

  // Слайдер на главной 
  const mainSlider = new Swiper('.swiper-container-main', {
    loop: true,
    navigation: {
      nextEl: '.main-slider-next',
      prevEl: '.main-slider-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    // autoplay: {
    //   delay: 6000,
    // },
    speed: 1000
  });

  // Мобильное меню
  $('.hamburger').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });

  $('.mobile-menu__link-drop').click(function () {
    $('.mobile-menu__courses').toggleClass('active');
    $('.mobile-menu__link-drop-icon').toggleClass('active');
  });

  // Скролл наверх
  $(".footer-top-btn").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      1000
    );
  });

  //Mask for inputs
  function checkInput(selector) {
    $(selector).bind('keypress', function (e) {
      if (e.key.match(/[^a-z 0-9 @ \. \- \_]/ig)) {
        e.preventDefault();
      }
    });
  }
  checkInput('[name="user_skype"]');
  checkInput('[type="email"]');
});