const modals = document.querySelectorAll('.modal');

const getRequestModal = document.getElementById('getRequestModal');

const getRequestButtons = document.querySelectorAll('.get-request');

const otherFiltersModal = document.getElementById('otherFiltersModal');

const otherFiltersButtons = document.querySelectorAll('.other-filter-button');

getRequestModal.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove('active');
});

getRequestButtons.forEach((button) => {
  button.addEventListener('click', () => getRequestModal.classList.add('active'));
});

otherFiltersModal.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove('active');
});

otherFiltersButtons.forEach((button) => {
  button.addEventListener('click', () => otherFiltersModal.classList.add('active'));
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isCloseBtn = event.target.classList.contains('modal__button-close');
    const isOverlay = event.target.classList.contains('modal');

    if (isCloseBtn || isOverlay) event.currentTarget.classList.remove('active');
  });
});
