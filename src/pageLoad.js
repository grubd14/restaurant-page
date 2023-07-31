import { createAboutSection } from "./homePage";
import { createTopNavigationBar } from "./navigationBar";
export { pageLoad };

function pageLoad() {
  createTopNavigationBar();
  createAboutSection();
}
