let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let searchButton = document.querySelector('.header__button');
let search = document.querySelector('.header__search');
let searchClose = document.querySelector('.search__close')
burger.addEventListener('click',

// burger menu

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// search

searchButton.addEventListener('click',
  function () {
    search.classList.toggle('header__search--active');
  });

searchClose.addEventListener('click',
function () {
search.classList.remove('header__search--active');
});


// hero swiper
const heroSwiper = new Swiper('.hero .swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 100,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
// step slider

let tabsBtn = document.querySelectorAll('.step__btn');
let tabsItem = document.querySelectorAll('.step__stages')

// переключение по клику

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) { btn.classList.remove('step__btn--active')});
    e.currentTarget.classList.add('step__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('step__stages--active')});
    document.querySelector(`[data-target='${path}']`).classList.add("step__stages--active");
  });
});

// переключение по фокусу

tabsBtn.forEach(function(element) {
  element.addEventListener("focus", function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) { btn.classList.remove('step__btn--active')});
    e.currentTarget.classList.add('step__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('step__stages--active')});
    document.querySelector(`[data-target='${path}']`).classList.add("step__stages--active");
  });
});



// Accordion

new Accordion('.accordion-container');


