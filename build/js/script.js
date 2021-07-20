'use strict';
var menuMobile = document.querySelector('.page-header__menu');
var menuBtn = document.querySelector('.page-header__menu-button');
var page = document.querySelector('.page');
var menuItem = document.querySelectorAll('.page-header__menu-item');
var contactName = document.getElementById('name');
var contactPhone = document.getElementById('phone');
var send = document.getElementById('send-button');
// В случае загрузки JS добавит кнопку меню
(function () {
  if (menuMobile && menuBtn && page && menuItem) {
    menuBtn.classList.add('page-header__menu-button--close');
    menuMobile.classList.add('page-header__menu--close');
    // Нажатие на кнопку открытия/закрытия меню
    menuBtn.addEventListener('click', function () {
      if (menuMobile.classList.contains('page-header__menu--close')) {
        menuMobile.classList.remove('page-header__menu--close');
        menuMobile.classList.add('page-header__menu--open');
        menuBtn.classList.remove('page-header__menu-button--close');
        menuBtn.classList.add('page-header__menu-button--open');
        page.classList.add('overlay');
      } else {
        menuMobile.classList.add('page-header__menu--close');
        menuMobile.classList.remove('page-header__menu--open');
        menuBtn.classList.remove('page-header__menu-button--open');
        menuBtn.classList.add('page-header__menu-button--close');
        page.classList.remove('overlay');
      }
    });

    // Нажатие на пункты меню (закрытие меню)
    menuItem.forEach(function (entry) {
      entry.addEventListener('click', function () {
        menuMobile.classList.add('page-header__menu--close');
        menuMobile.classList.remove('page-header__menu--open');
        menuBtn.classList.remove('page-header__menu-button--open');
        menuBtn.classList.add('page-header__menu-button--close');
        page.classList.remove('overlay');
        return;
      });
    });
    // Валидация формы
    send.addEventListener('click', function () {
      if (contactName && contactPhone) {
        if (contactPhone.checkValidity() === true && contactName.checkValidity() === true) {
          localStorage.setItem('email', contactName.value);
          localStorage.setItem('phone', contactPhone.value);
        } else {
          contactPhone.classList.add('outline');
          contactName.classList.add('outline');
        }
      }
    });
  }
})();
// Не даю ввести в поле телефон ничего кроме цифр
contactPhone.oninput = function () {
  var value = contactPhone.value;
  contactPhone.value = value.replace(/\D/g, '');
};
