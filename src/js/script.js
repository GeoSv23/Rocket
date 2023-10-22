const burgerButton = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgerMenu");
const body = document.querySelector("body");
const buttonSign = document.querySelectorAll(".button__sign");
const form = document.querySelector(".form");
const formItem = document.querySelector(".formItem");
const buttonSignBurger = document.querySelector(".button__sign-burger");
const cancelForm = document.querySelector(".cancelForm");
const nextbut = document.querySelectorAll("swiper-button-next");

for (let i = 0; i < buttonSign.length; i++) {
  buttonSign[i].addEventListener("click", function () {
    form.style.display = "flex";
    body.classList.add("noScroll");
  });
}

buttonSignBurger.addEventListener("click", function () {
  form.style.display = "flex";
  body.classList.add("noScroll");
  burgerMenu.classList.remove("burgerMenu__active");
  burgerButton.classList.remove("active");
});

window.addEventListener("click", function (event) {
  if (event.target === form) {
    body.classList.add("noScroll");
  }
});

cancelForm.addEventListener("click", function () {
  form.style.display = "none";
  body.classList.remove("noScroll");
});

burgerButton.addEventListener("click", function () {
  body.classList.toggle("noScroll");
  burgerButton.classList.toggle("active");
  burgerMenu.classList.toggle("burgerMenu__active");
});

window.addEventListener("click", function (event) {
  if (event.target === form) {
    form.style.display = "none";
    body.classList.remove("noScroll");
  }
});
