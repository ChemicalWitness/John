const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
} );
