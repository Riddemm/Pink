// Mobile-menu
var toggle = document.querySelector(".page-header__toggle");
var navigation = document.querySelector(".main-nav");
var header = document.querySelector(".page-header");

toggle.classList.remove("page-header__toggle--nojs");
navigation.classList.remove("main-nav--nojs");

header.classList.remove("page-header--opened");
header.classList.add("page-header--closed");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("main-nav--opened");
  toggle.classList.toggle("page-header__toggle--opened");
  header.classList.toggle("page-header--opened");
  navigation.classList.toggle("main-nav--closed");
  toggle.classList.toggle("page-header__toggle--closed");
  header.classList.toggle("page-header--closed");
});

// Map
if (document.querySelector(".map__interactive")) {
  var map = document.querySelector(".map__interactive");
  map.classList.remove("map__interactive--nojs");
}

// Modal
try {
  var open_popup = document.querySelector(".form__btn");
  var popup_fail = document.querySelector(".fail");
  var close_fail = popup_fail.querySelector(".fail__btn");
  var popup_success = document.querySelector(".success");
  var close_success = popup_success.querySelector(".success__btn");
  var overlay = document.querySelector(".overlay");
  var form = document.querySelector(".form");
  var fio__name = document.querySelector("[name=fio__name]");
  var fio__surname = document.querySelector("[name=fio__surname]");

  //Открытие модальных окон при отправке формы
  form.addEventListener("submit", function (evt) {
    overlay.classList.add("modal__show")
    if (!fio__name.value || !fio__surname.value) {
      evt.preventDefault();
      popup_fail.classList.add("modal__show");
    } else {
      evt.preventDefault();
      popup_success.classList.add("modal__show");
    }
  });

  // Закрытие модальных окон по кнопке
  close_fail.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_fail.classList.remove("modal__show");
    overlay.classList.remove("modal__show");
  });

  close_success.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_success.classList.remove("modal__show");
    overlay.classList.remove("modal__show");
  });

  //Закрытие модальных окон по клавиатуре
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && (popup_fail.classList.contains("modal__show") || popup_success.classList.contains("modal__show"))) {
      evt.preventDefault();
      popup_success.classList.remove("modal__show");
      popup_fail.classList.remove("modal__show");
      overlay.classList.remove("modal__show");
    }
  });
} catch (err) {

}
