"use strict";
import AOS from "aos";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const windowWidth = window.innerWidth;

// handle open menu
(function () {
  var menuOpen = $('#menu-open');
  var menuClose = $('#menu-close');
  var menuContent = $('#menu');

  const onToogleMenu = () => {
    menuContent.classList.toggle('menu_active');
  };

  menuOpen.addEventListener("click", onToogleMenu);
  menuClose.addEventListener("click", onToogleMenu);
})();


//Navbar scrollBehavior
let prevScrollpos = 0;

const handleScrollBehavior = () => {
  const navbar = $("#navbar");
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 200 && prevScrollpos > currentScrollPos) {
    navbar.classList.add('navbar_active');
  } else {
    navbar.classList.remove('navbar_active');
  }

  prevScrollpos = currentScrollPos;
};

window.addEventListener('scroll', handleScrollBehavior);


// handle tabs

if (windowWidth < 1024) {

  // tab open content mobile
  (function () {
    const tabcontents = $$('.tab__content_mobile');
    const tablinks = $$('.tab__link');

    if (tabcontents.length < 1 || tablinks.length < 1) {
      return;
    };

    const tabToggler = index => {
      tabcontents[index].classList.toggle('tab__content_mobile_active');
      tablinks[index].classList.toggle('tab__link_active');
    };

    tablinks.forEach((tabLink, index) => tabLink.addEventListener('click', () => tabToggler(index)));
  })();

} else {
  const select = document.querySelector.bind(document);
  const selectAll = document.querySelectorAll.bind(document);

  const tabContents = selectAll('div.tab__content');
  const tabLinks = selectAll('button.tab__link');
  const tabLinksDefault = select('button.tab__link[data-defaultLink]');

  const handleLinkClick = index => {
    tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
    tabLinks.forEach(tabLink => tabLink.classList.remove('tab__link_active'));

    tabContents[index].classList.add('tab__content_active');
    tabLinks[index].classList.add('tab__link_active');
  };

  tabLinks.forEach((tabLink, index) => tabLink.addEventListener('click', () => handleLinkClick(index)));
  tabLinksDefault.click();

}

// animation on scroll
AOS.init();
