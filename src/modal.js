// Get DOM elements
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const modalContent = document.querySelector(".modal-content");

// Open cart modal
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
  // Add animation class
  modalContent.style.transform = "translateX(0)";
});

// Close modal when clicking outside
cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    closeModal();
  }
});

// Close modal function
function closeModal() {
  modalContent.style.transform = "translateX(100%)";
  setTimeout(() => {
    cartModal.style.display = "none";
    modalContent.style.transform = "translateX(100%)";
  }, 300);
}

// Handle favorite buttons
const favoriteButtons = document.querySelectorAll(".favorite");
favoriteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
  });
});
