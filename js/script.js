// console.log("hello world");
// defining variable
// const myName = "Mako";
// const h1 = document.querySelector(".heading-primary");
// printing variable in console
// console.log(h1);

// h1.textContent = myName;
// defining CSS styles in js
// h1.style.backgroundColor = "red";

// h1.addEventListener("click", function () {
// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// });

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".button-for-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavEl.addEventListener("click", function () {
  btnNavEl.classList.toggle("fixed");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
      headerEl.classList.add("header-fixed-pos");
      // add padding top to show content behind navbar
    } else {
      headerEl.classList.remove("header-fixed-pos");
    }
  });
});

const navButtons = document.querySelectorAll(".main-nav-link");
navButtons[0].addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navButtons[1].addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navButtons[2].addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navButtons[3].addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navButtons[4].addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
