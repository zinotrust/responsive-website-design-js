// Hamburger Toggler
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

close.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

// Modal Secion

// VARIABLES
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

// open popup
function openPopup(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// close popup
function closePopup() {
  modal.style.display = "none";
}

// Animation
AOS.init({
  duration: 1000,
});
