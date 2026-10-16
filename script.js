document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'Email format checked. This preview does not send or store subscriptions.';
  });
});
