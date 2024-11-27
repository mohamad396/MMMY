const landing = document.querySelector(".Landing");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const bulletList = document.querySelector(".bullets");

const bgImages = ["sphinix", "eiffel", "colosseum"];
let currImgIndex = 0;

prevButton.addEventListener("click", () => {
 currImgIndex = currImgIndex > 0 ? currImgIndex - 1 : bgImages.length - 1;

 landing.style.background = "url('images/" + bgImages[currImgIndex] + ".jpg')";

 bulletList.querySelectorAll("li").forEach((li, idx) => {
  li.classList.toggle("active", idx == currImgIndex);
 });
});

nextButton.addEventListener("click", () => {
 currImgIndex++;
 currImgIndex = currImgIndex % bgImages.length;

 landing.style.background = "url('images/" + bgImages[currImgIndex] + ".jpg')";

 bulletList.querySelectorAll("li").forEach((li, idx) => {
  li.classList.toggle("active", idx == currImgIndex);
 });
});