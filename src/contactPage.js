export { createContactSection };

function createContactSection() {
  const contentBody = document.getElementById("content");
  const pageContent = document.createElement("div");

  pageContent.classList.add("page-contents");

  const contactSectionContainer = document.createElement("div");

  contactSectionContainer.classList.add("contact-section");

  const contacts = document.createElement("div");
  contacts.innerHTML = `<h2>Contacts</h2>
  <h4>9745340035</h4>
  `;

  contactSectionContainer.appendChild(contacts);
  contentBody.appendChild(pageContent);
  pageContent.appendChild(contactSectionContainer);
}
