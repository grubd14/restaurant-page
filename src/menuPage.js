export { createMenuSection };

function createMenuSection() {
  const contentBody = document.getElementById("content");

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-container");

  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-items");
  menuSection.innerHTML = `
<h4>Menu Items</h4>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>
<ul>Chicken Tandoori</ul>`;

  contentBody.appendChild(menuItemsContainer);
  menuItemsContainer.appendChild(menuSection);
}
