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
const heroSec = document.querySelector(".section-hero");

var navHeight = document.querySelector(".main-header").clientHeight;

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavEl.addEventListener("click", function () {
  btnNavEl.classList.toggle("fixed");
});

// nav bar will become sticky after scrolling down out of hero section
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSec);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 130;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    if (elementTop > 1.2 * windowHeight - elementVisible) {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// Set mobile nav buttons to close the menu
const navButtons = document.querySelectorAll(".main-nav-link");
navButtons.forEach(function (link) {
  link.addEventListener("click", function (e) {
    headerEl.classList.remove("nav-open");
  });
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
