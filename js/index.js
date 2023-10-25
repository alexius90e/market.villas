const hamburgerBtn = document.querySelector('.header__button_hamburger');
const headerNav = document.querySelector('.header .nav');


hamburgerBtn.addEventListener('click', () => {
  document.body.classList.toggle('active')
  headerNav.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});
