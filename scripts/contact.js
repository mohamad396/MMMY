const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", e => {
 const nameInput = contactForm.elements["name"];

 if (!/^[A-Za-z]+$/.test(nameInput.value)) {
  e.preventDefault();
  alert("Name must only contain letters.");
 }
});