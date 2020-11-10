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

  //Price cards
  class LanguageCard {
    constructor(parentSelector, title, subtitle, languagesTitles, imagePath, listId) {
      this.parent = document.querySelector(parentSelector);
      this.title = title;
      this.subtitle = subtitle;
      this.languagesTitles = languagesTitles;
      this.imagePath = imagePath;
      this.listId = listId;
    }

    renderLanguagesList() {
      for (let i = 0; i < this.languagesTitles.length; i++) {
        let liItem = document.createElement('li');
        liItem.classList.add('spanish-price-wrapper-card-content-language-list-item');

        liItem.innerHTML = `
            <li class="spanish-price-wrapper-card-content-language-list-item">
              <img class="spanish-price-wrapper-card-content-language-list-item-image" src="images/flags/${this.imagePath[i]}.jpg" alt="Flag"/>
              <span>${this.languagesTitles[i]}</span>
            </li>
          `;
        document.querySelector(`#${this.listId}`).append(liItem);
      }
    }

    render() {
      const element = document.createElement('div');
      element.classList.add('spanish-price-wrapper-card');

      element.innerHTML = `
        <div class="spanish-price-wrapper-card-content">
          <h2 class="spanish-price-wrapper-card-content-title">ТАРИФ «${this.title}»</h2>
          <div class="spanish-price-wrapper-card-content-subtitle">${this.subtitle}</div>
          <ul class="spanish-price-wrapper-card-content-language-list" id="${this.listId}">
            <li class="spanish-price-wrapper-card-content-language-list-item">ЯЗЫКИ:</li>
          </ul>
          <div class="spanish-price-wrapper-card-content-duration">
            <div class="spanish-price-wrapper-card-content-duration-title">Продолжительность занятия:</div>
            <div class="spanish-price-wrapper-card-content-duration-time-wrapper">
              <div class="spanish-price-wrapper-card-content-duration-time-wrapper-item button-test main-lesson__test-button">60 мин.</div>
              <div class="spanish-price-wrapper-card-content-duration-time-wrapper-item button-test main-lesson__test-button">90 мин.</div>
            </div>
            <div class="spanish-price-wrapper-card-content-duration-title">Стоимость пакета:</div>
            <div class="spanish-price-wrapper-card-content-duration-table">
              <div class="spanish-price-wrapper-card-content-duration-table-title"><span>кол-во занятий</span><span>стоимость занятия</span><span>стоимость пакета</span></div>
              <div class="spanish-price-wrapper-card-content-duration-table-content">
                <ul class="spanish-price-wrapper-card-content-duration-table-content-list">
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">1</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">4 </li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">8</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">16</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">24</li>
                </ul>
                <ul class="spanish-price-wrapper-card-content-duration-table-content-list">
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">725 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">725 ₽ </li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">690 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">660 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">625 ₽</li>
                </ul>
                <ul class="spanish-price-wrapper-card-content-duration-table-content-list">
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">725 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">2900 ₽ </li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">5520 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">10560 ₽</li>
                  <li class="spanish-price-wrapper-card-content-duration-table-content-list-item">1500 ₽</li>
                </ul>
              </div>
              <div class="button-test main-lesson__test-button">ЗАПИСАТЬСЯ НА БЕСПЛАНТЫЙ УРОК</div>
            </div>
          </div>
        </div>
      `;

      this.parent.append(element);
      this.renderLanguagesList();
    }
  }

  new LanguageCard(
    '.spanish-price-wrapper',
    'СТАНДАРТ/ЭКЗАМЕН',
    `Общий разговорный / Бизнес курс / Для путешествий / TOEFL / IELTS / DELE / GOETHE / DELF`,
    ['АНГЛИЙСКИЙ', 'ФРАНЦУЗСКИЙ', 'НЕМЕЦКИЙ', 'ИСПАНСКИЙ', 'ИТАЛЬЯНСКИЙ'],
    ['gb', 'fr', 'ger', 'sp', 'it'],
    'standartList'
  ).render();

  new LanguageCard(
    '.spanish-price-wrapper',
    'AЗИАТСКИЙ',
    `Общий разговорный / Бизнес курс / Для путешествий`,
    ['КИТАЙСКИЙ', 'ЯПОНСКИЙ', 'КОРЕЙСКИЙ'],
    ['ch', 'jp', 'kor'],
    'asianList'
  ).render();

  new LanguageCard(
    '.spanish-price-wrapper',
    'АРАБСКИЙ',
    'Общий разговорный / Бизнес курс / Для путешествий',
    ['ТУРЕЦКИЙ', 'АРАБСКИЙ'],
    ['tr', 'uae'],
    'arabianList'
  ).render();
});