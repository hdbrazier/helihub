document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contact-modal');
  const openNavBtn = document.getElementById('open-contact-nav');
  const openBodyBtn = document.getElementById('open-contact-body');
  const closeBtn = modal.querySelector('.close-modal');
  const form = document.getElementById('contact-form');
  const feedback = document.querySelector('.form-feedback');

  function openModal(e) {
    e.preventDefault();
    modal.hidden = false;
    modal.querySelector('#name').focus();
  }

  if (openNavBtn) openNavBtn.addEventListener('click', openModal);
  if (openBodyBtn) openBodyBtn.addEventListener('click', openModal);

  closeBtn.addEventListener('click', () => {
    modal.hidden = true;
    feedback.textContent = '';
    form.reset();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all fields.';
      feedback.style.color = 'red';
      return;
    }

    feedback.textContent = 'Message sent! Thank you.';
    feedback.style.color = 'green';

    setTimeout(() => {
      modal.hidden = true;
      form.reset();
      feedback.textContent = '';
    }, 2000);
  });
});
