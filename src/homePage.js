export { createAboutSection };

function createAboutSection() {
  const contentBody = document.getElementById('content')
  const aboutSectionContainer = document.createElement("div");

  aboutSectionContainer.classList.add("about-section");

  contentBody.appendChild(aboutSectionContainer);


}

