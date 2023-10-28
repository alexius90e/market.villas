const modals = document.querySelectorAll('.modal');

const getRequestModal = document.getElementById('getRequestModal');

getRequestModal.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove('active');
});

const getRequestButtons = document.querySelectorAll('.get-request');

getRequestButtons.forEach((button) => {
  button.addEventListener('click', () => getRequestModal.classList.add('active'));
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isCloseBtn = event.target.classList.contains('modal__button-close');
    const isOverlay = event.target.classList.contains('modal');

    if (isCloseBtn || isOverlay) event.currentTarget.classList.remove('active');
  });
});
