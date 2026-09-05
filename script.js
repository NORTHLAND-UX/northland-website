const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
menuBtn?.addEventListener('click', () => header.classList.toggle('menu-open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('menu-open'));
});

document.getElementById('quoteForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thank you. Your enquiry form is ready to connect to your email or WhatsApp number.';
});
