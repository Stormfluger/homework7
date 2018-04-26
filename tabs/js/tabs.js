window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.getElementById('tabs');
  const tabsNav = tabs.querySelector('.tabs-nav');
  const tabsContent = tabs.querySelector('.tabs-content');
  const articles = tabsContent.children;
  const removeTab = tabsNav.removeChild(tabsNav.firstElementChild);

  Array.from(articles).forEach((article, i) => {
    article.classList.add('hidden');
    renderTab(article, i + 1);
  });

  articles[0].classList.remove('hidden');

  function renderTab(article, index) {
    const tabIcon = article.dataset.tabIcon;
    const tabTitle = article.dataset.tabTitle;
    const tabNavItem = removeTab.cloneNode(true);
    const tabNavLink = tabNavItem.firstElementChild;

    tabNavLink.classList.add(tabIcon);
    tabNavLink.textContent = tabTitle;

    tabNavLink.addEventListener('click', (event) => {
      event.preventDefault();

      const listItems = tabsNav.children;
      const currentItem = event.target.parentElement;
      const currentArticle = tabsContent.querySelector(`[data-tab-title=${event.target.textContent}]`);

      for (let item of listItems) {
        item.classList.remove('ui-tabs-active');
      }

      for (let itemArticle of articles) {
        itemArticle.classList.add('hidden');
      }

      currentItem.classList.add('ui-tabs-active');
      currentArticle.classList.remove('hidden');
    });

    tabsNav.appendChild(tabNavItem);

    if (index === 1) {
      tabNavItem.classList.add('ui-tabs-active');
    }
  }

});