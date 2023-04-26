const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('burger-btn--change');
  nav.classList.toggle('nav--change');
});
