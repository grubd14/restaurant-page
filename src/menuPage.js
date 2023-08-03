export { createMenuSection };

function createMenuSection() {
  const contentBody = document.getElementById("content");
  const pageContent = document.createElement('div');

  pageContent.classList.add('page-contents');

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-section");

  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-items");
  menuSection.innerHTML = `
<h4>Menu Items</h4>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>`;

  contentBody.appendChild(pageContent);
  pageContent.appendChild(menuItemsContainer);
  menuItemsContainer.appendChild(menuSection);
}
