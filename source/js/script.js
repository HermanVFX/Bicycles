'use strict';
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-button');
const contactName= document.getElementById('name');
const contactPhone= document.getElementById('phone');
const page = document.querySelector('.page')
const menuItem = document.querySelectorAll('.header__menu-item');

menu.classList.add('header__menu--close');
// Нажатие на кнопку открытия/закрытия меню
menuBtn.addEventListener('click', function () {
  if (menu.classList.contains('header__menu--close')) {
    menu.classList.remove('header__menu--close');
    menu.classList.add('header__menu--open');
    page.classList.add('overlay');
  } else {
    menu.classList.add('header__menu--close');
    menu.classList.remove('header__menu--open');
    page.classList.remove('overlay');
  }
});
// Валидация формы
function contactSaveLocalStorage() {
  if (contactPhone.checkValidity() ==! false) {
  localStorage.setItem("email", contactName.value);
  localStorage.setItem("phone", contactPhone.value);
  alert ('Данные отправлены');
} else {
    contactPhone.style.border = '2px solid #FE7865';
    contactName.style.border = '2px solid #FE7865';
  }
};
// Нажатие на пункты меню (закрытие меню)
menuItem.forEach(b=>b.addEventListener('click', function() {
  menu.classList.add('header__menu--close');
  menu.classList.remove('header__menu--open');
  page.classList.remove('overlay');
  return;
}));
