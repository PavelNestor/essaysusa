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


  if (tabLinks.length > 0) {
    tabLinks.forEach((tabLink, index) => tabLink.addEventListener('click', () => handleLinkClick(index)));
    tabLinksDefault.click();
  };
}

// menu item click handler
const paperLink = $('#paper_link');
const subjectLink = $('#subject_link');
const paperLinkMobile = $('#paper_link_mobile');
const subjectLinkMobile = $('#subject_link_mobile');
const paper = $('#paper');
const subject = $('#subject');
const paperClose = $('#paper-close');
const subjectClose = $('#subject-close');

const handlePaperClick = () => {
  paper.classList.toggle('paper_active');
  paperLink.classList.toggle('paper-link_active');
  if (subject.classList.contains('subject_active')) {
    subject.classList.remove('subject_active');
    subjectLink.classList.remove('paper-link_active');
  };
};

const handleSubjectClick = () => {
  subject.classList.toggle('subject_active');
  subjectLink.classList.toggle('paper-link_active');
  if (paper.classList.contains('paper_active')) {
    paper.classList.remove('paper_active');
    paperLink.classList.remove('paper-link_active');
  };
};

paperLink.addEventListener('click', handlePaperClick);
subjectLink.addEventListener('click', handleSubjectClick);
paperLinkMobile.addEventListener('click', handlePaperClick);
subjectLinkMobile.addEventListener('click', handleSubjectClick);
paperClose.addEventListener('click', handlePaperClick);
subjectClose.addEventListener('click', handleSubjectClick);

// footer more - less
const footerMore = $('.footer__more');
const footerLess = $('.footer__less');
const footerSubmenu = $('.footer__submenu');

const handleFooderMore = () => {
  footerSubmenu.classList.add('footer__submenu_active');
  footerMore.style.display = 'none';
  footerLess.style.display = 'block';
}

const handleFooderLess = () => {
  footerSubmenu.classList.remove('footer__submenu_active');
  footerLess.style.display = 'none';
  footerMore.style.display = 'block';
}

footerMore.addEventListener('click', handleFooderMore);
footerLess.addEventListener('click', handleFooderLess);

// animation on scroll
AOS.init();
