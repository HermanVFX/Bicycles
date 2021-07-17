'use strict';
const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-button');
const contactName= document.getElementById('name');
const contactPhone= document.getElementById('phone');
const page = document.querySelector('.page')
const menuItem = document.querySelectorAll('.header__menu-item');
// В случае загрузки JS добавит кнопку меню
function onLoadPage() {
  menuBtn.classList.add('header__menu-button--close');
  menu.classList.add('header__menu--close');
}
// Нажатие на кнопку открытия/закрытия меню
menuBtn.addEventListener('click', function () {
  if (menu.classList.contains('header__menu--close')) {
    menu.classList.remove('header__menu--close');
    menu.classList.add('header__menu--open');
    menuBtn.classList.remove('header__menu-button--close');
    menuBtn.classList.add('header__menu-button--open');
    page.classList.add('overlay');
  } else {
    menu.classList.add('header__menu--close');
    menu.classList.remove('header__menu--open');
    menuBtn.classList.remove('header__menu-button--open');
    menuBtn.classList.add('header__menu-button--close');
    page.classList.remove('overlay');
  }
});
// Валидация формы
function contactSaveLocalStorage() {
  if (contactPhone.checkValidity() ==! false && contactName.checkValidity() ==! false) {
  localStorage.setItem("email", contactName.value);
  localStorage.setItem("phone", contactPhone.value);
  alert ('Данные отправлены');
} else {
    contactPhone.classList.add('outline');
    contactName.classList.add('outline');
  }
};
// Нажатие на пункты меню (закрытие меню)
menuItem.forEach(b=>b.addEventListener('click', function() {
  menu.classList.add('header__menu--close');
  menu.classList.remove('header__menu--open');
  menuBtn.classList.remove('header__menu-button--open');
  menuBtn.classList.add('header__menu-button--close');
  page.classList.remove('overlay');
  return;
}));
// Не даю ввести в поле телефон ничего кроме цифр
function numValidation(input) {
  const value = input.value;
  input.value = value.replace(/\D/g, '');
};
