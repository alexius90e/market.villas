const compareSliders = document.querySelectorAll('.compare__slider');

compareSliders.forEach((slider) => {
  const swiperElem = slider.querySelector('.swiper');
  const scrollbarElem = slider.querySelector('.swiper-scrollbar');
  const nextElem = slider.querySelector('.swiper-button-next');
  const prevElem = slider.querySelector('.swiper-button-prev');

  const compareSwiper = new Swiper(swiperElem, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      350: {
        slidesPerView: 1.25,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: nextElem,
      prevEl: prevElem,
    },
    scrollbar: {
      el: scrollbarElem,
      draggable: true,
    },
  });
});
