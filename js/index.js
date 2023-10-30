import './catalog.js';
import './custom-select.js';
import './modal.js';

const hamburgerBtn = document.querySelector('.header__button_hamburger');
const headerNav = document.querySelector('.header .nav');

hamburgerBtn.addEventListener('click', () => {
  document.body.classList.toggle('active');
  headerNav.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});

const headerNavDropdown = document.querySelectorAll('.nav__menu-item_dropdown');

headerNavDropdown.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const isTargetDropdownButton = event.target.classList.contains('nav__menu-button-dropdown');
    if (!isTargetDropdownButton) return;
    const submenuElem = event.currentTarget.querySelector('.nav__submenu');
    submenuElem.classList.toggle('active');
  });
});

const firstScreenForms = document.querySelectorAll('.first-screen__form');

firstScreenForms.forEach((firstScreenForm) => {
  firstScreenForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.submitter.matches('.first-screen__more-button')) return;

    const form = new FormData(event.currentTarget);

    const typeOfObject = form.get('typeOfObject');
    const area = form.get('area');
    const bedrooms = form.get('bedrooms');
    const price = form.get('price');

    console.log(
      `typeOfObject: ${typeOfObject} area: ${area} bedrooms: ${bedrooms} price: ${price} `
    );
  });
});

const productSliders = document.querySelectorAll('.product__slider');

productSliders.forEach((productSlider) => {
  const mainSlider = productSlider.querySelector('.product__slider-main');
  const thumbsSlider = productSlider.querySelector('.product__slider-thumbs');

  const prevButton = productSlider.querySelector('.swiper-button-prev');
  const nextButton = productSlider.querySelector('.swiper-button-next');

  const swiperThumbs = new Swiper(thumbsSlider, {
    spaceBetween: 8,
    slidesPerView: 5.2,
    freeMode: true,
    watchSlidesProgress: true,
    autoScrollOffset: 1,

    breakpoints: {
      576: {
        slidesPerView: 6,
      },
    },
  });

  const swiperMain = new Swiper(mainSlider, {
    spaceBetween: 10,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });
});
