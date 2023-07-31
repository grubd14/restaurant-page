import "./style.css";
export { createTopNavigationBar };

function createTopNavigationBar() {
  const contentBody = document.querySelector("#content");
  const navigationContainer = document.createElement("div");

  navigationContainer.classList.add("top-navigation-bar");

  const homeNavigationTab = document.createElement("div");
  homeNavigationTab.classList.add("navigation-tabs");
  homeNavigationTab.textContent = "Home";

  const contactNavigationTab = document.createElement("div");
  contactNavigationTab.classList.add("navigation-tabs");
  contactNavigationTab.textContent = "Contact";

  const menuNavigationTab = document.createElement("div");
  menuNavigationTab.classList.add("navigation-tabs");
  menuNavigationTab.textContent = "Menu";

  contentBody.appendChild(navigationContainer);

  navigationContainer.appendChild(homeNavigationTab);
  navigationContainer.appendChild(menuNavigationTab);
  navigationContainer.appendChild(contactNavigationTab);
}

