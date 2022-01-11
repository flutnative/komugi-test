"use strict";
//////////////////Booking-header////////////////

const headerScreenShow = document
  .querySelector(".btn-header")
  .addEventListener("click", function () {
    document.querySelector(".popup-nav").style.display = "flex";
  });

const headerScreenHide = document
  .querySelector(".closing-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup-nav").style.display = "none";
  });
//////////////////Booking-top////////////////

const bookingScreenShow = document
  .querySelector(".btn.top")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
  });

const bookingScreenHide = document
  .querySelector(".closing-btn-second")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
//////////////////Burger btn////////////////
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
//////////////////MENUS////////////////

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//////////////////SMOoTH-SCROLL////////////////
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
