const catalogSliders = document.querySelectorAll('.catalog-card__slider');

catalogSliders.forEach((slider) => {
  const swiperElem = slider.querySelector('.swiper');
  const paginationElem = slider.querySelector('.swiper-pagination');
  const nextElem = slider.querySelector('.swiper-button-next');
  const prevElem = slider.querySelector('.swiper-button-prev');

  const swiper = new Swiper(swiperElem, {
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: paginationElem,
    },

    navigation: {
      nextEl: nextElem,
      prevEl: prevElem,
    },
  });
});
