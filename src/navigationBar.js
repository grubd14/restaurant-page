import { createAboutSection } from "./homePage";
import { createContactSection } from "./contactPage";
import { createMenuSection } from "./menuPage";
import "./style.css";
export { createTopNavigationBar };

function createTopNavigationBar() {
  const contentBody = document.querySelector("#content");
  const navigationContainer = document.createElement("div");

  navigationContainer.classList.add("top-navigation-bar");

  const homeNavigationTab = document.createElement("div");
  homeNavigationTab.classList.add("navigation-tabs");
  homeNavigationTab.setAttribute("id", "home-btn");
  homeNavigationTab.textContent = "Home";
  homeNavigationTab.addEventListener("click", () => {
    clearAllContent();
    createAboutSection();
  });

  const menuNavigationTab = document.createElement("div");
  menuNavigationTab.classList.add("navigation-tabs");
  menuNavigationTab.setAttribute("id", "menu-btn");
  menuNavigationTab.textContent = "Menu";
  menuNavigationTab.addEventListener("click", () => {
    clearAllContent();
    createMenuSection();
  });

  const contactNavigationTab = document.createElement("div");
  contactNavigationTab.classList.add("navigation-tabs");
  contactNavigationTab.setAttribute("id", "contact-btn");
  contactNavigationTab.textContent = "Contact";
  contactNavigationTab.addEventListener("click", () => {
    clearAllContent();
    createContactSection();
  });

  contentBody.appendChild(navigationContainer);

  navigationContainer.appendChild(homeNavigationTab);
  navigationContainer.appendChild(menuNavigationTab);
  navigationContainer.appendChild(contactNavigationTab);
}

function clearAllContent() {
  const contentBody = document.querySelector(".content");
  const pageContent = document.querySelector(".page-contents");
  if (pageContent) {
    contentBody.removeChild(pageContent);
  }
}
