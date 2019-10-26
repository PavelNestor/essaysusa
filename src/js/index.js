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
