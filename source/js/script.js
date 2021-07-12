'use strict';
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-button');

menu.classList.add('header__menu--close');

menuBtn.addEventListener('click', function () {
  if (menu.classList.contains('header__menu--close')) {
    menu.classList.remove('header__menu--close');
    menu.classList.add('header__menu--open');
  } else {
    menu.classList.add('header__menu--close');
    menu.classList.remove('header__menu--open');
  }
});
