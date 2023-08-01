export { createAboutSection };
import RestaurantImage from "./restaurant.jpg";

function createAboutSection() {
  const contentBody = document.getElementById("content");
  const aboutSectionContainer = document.createElement("div");

  aboutSectionContainer.classList.add("about-section");

  const aboutSectionImage = document.createElement("div");
  aboutSectionImage.classList.add("about-image-container");

  const restroImage = new Image();
  restroImage.src = RestaurantImage;
  restroImage.classList.add("about-section-image");

  const aboutSectionText = document.createElement("div");
  aboutSectionText.classList.add("about-section-text");
  aboutSectionText.innerHTML = `<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat repur Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>`;

  aboutSectionContainer.appendChild(aboutSectionImage);
  aboutSectionContainer.appendChild(aboutSectionText);
  aboutSectionImage.appendChild(restroImage);
  contentBody.appendChild(aboutSectionContainer);
}
