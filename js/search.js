const searchForms = document.querySelectorAll('.search__form');

searchForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.submitter.matches('.search__form-add-filters')) return;

    const formData = new FormData(form);
    const searchQuery = formData.get('searchQuery')

    console.log(searchQuery);
  });
});
