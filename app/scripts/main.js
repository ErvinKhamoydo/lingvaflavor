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

  //Tabs
  function tabs(triggerparent, priceParent) {
    const tabsParent = $(triggerparent);

    tabsParent.on('click', function (e) {
      const targetItem = e.target;
      let tabIndex = $(`${triggerparent} > div`).index(e.target);

      tabsParent.children().removeClass('button-test-active')
      $(targetItem).addClass('button-test-active');

      $(`${priceParent} > .courses-price-wrapper-card-content-duration-table-content`).css('display', 'none');
      $(`${priceParent} > .courses-price-wrapper-card-content-duration-table-content:eq(${tabIndex})`).css('display', 'flex');
    });
  }

  tabs('.standart', '.standart-price');
  tabs('.exam', '.exam-price');
  tabs('.asian', '.asian-price');
  tabs('.arabian', '.arabian-price');


  // Accordion
  const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        btns.forEach(btn => {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          btn.nextElementSibling.style.maxHeight = 0 + 'px';
        });

        this.classList.toggle('active-style');
        this.nextElementSibling.classList.toggle('active-content');

        if (this.classList.contains('active-style')) {
          this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
        } else {
          this.nextElementSibling.style.maxHeight = 0 + 'px';
        }
      });
    });
  };

  accordion('.price-questions-accordion-heading');
});