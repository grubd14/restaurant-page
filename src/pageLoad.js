import { createAboutSection } from "./homePage";
import { createTopNavigationBar } from "./navigationBar";
import { createMenuSection } from "./menuPage";
export { pageLoad };

function pageLoad() {
  createTopNavigationBar();
  createAboutSection();
  createMenuSection();
}
