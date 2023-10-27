import './catalog.js';
import './custom-select.js';

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
    const dropdownButtonElem = event.target;
    const submenuElem = event.currentTarget.querySelector('.nav__submenu');
    submenuElem.classList.toggle('active');
  });
});

const firstScreenForm = document.querySelector('.first-screen__form');

firstScreenForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);

  const typeOfObject = form.get('typeOfObject');
  const area = form.get('area');
  const bedrooms = form.get('bedrooms');
  const price = form.get('price');
  const more = form.get('more');

  console.log(
    `typeOfObject: ${typeOfObject} area: ${area} bedrooms: ${bedrooms} price: ${price} more: ${more}`
  );
});
