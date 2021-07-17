'use strict';
const menuMobile = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-button');
const page = document.querySelector('.page');
const menuItem = document.querySelectorAll('.header__menu-item');
const contactName = document.getElementById('name');
const contactPhone = document.getElementById('phone');
// В случае загрузки JS добавит кнопку меню
function onLoadPage() {
  if (menuMobile && menuBtn && page && menuItem) {
    menuBtn.classList.add('header__menu-button--close');
    menuMobile.classList.add('header__menu--close');
    // Нажатие на кнопку открытия/закрытия меню
    menuBtn.addEventListener('click', function () {
      if (menuMobile.classList.contains('header__menu--close')) {
        menuMobile.classList.remove('header__menu--close');
        menuMobile.classList.add('header__menu--open');
        menuBtn.classList.remove('header__menu-button--close');
        menuBtn.classList.add('header__menu-button--open');
        page.classList.add('overlay');
      } else {
        menuMobile.classList.add('header__menu--close');
        menuMobile.classList.remove('header__menu--open');
        menuBtn.classList.remove('header__menu-button--open');
        menuBtn.classList.add('header__menu-button--close');
        page.classList.remove('overlay');
      }
    });

    // Нажатие на пункты меню (закрытие меню)
    menuItem.forEach(b=>b.addEventListener('click', function () {
      menuMobile.classList.add('header__menu--close');
      menuMobile.classList.remove('header__menu--open');
      menuBtn.classList.remove('header__menu-button--open');
      menuBtn.classList.add('header__menu-button--close');
      page.classList.remove('overlay');
      return;
    }));
  }
}
// Валидация формы
function contactSaveLocalStorage() {
  if (contactName && contactPhone) {
    if (contactPhone.checkValidity() === true && contactName.checkValidity() === true) {
      localStorage.setItem('email', contactName.value);
      localStorage.setItem('phone', contactPhone.value);
    } else {
      contactPhone.classList.add('outline');
      contactName.classList.add('outline');
    }
  }
}
// Не даю ввести в поле телефон ничего кроме цифр
function numValidation(input) {
  const value = input.value;
  input.value = value.replace(/\D/g, '');
}

onLoadPage();
numValidation();
