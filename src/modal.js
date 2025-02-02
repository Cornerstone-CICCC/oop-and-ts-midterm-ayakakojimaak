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

// Handle quantity buttons
const quantityBtns = document.querySelectorAll(".quantity-btn");
quantityBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantitySpan.textContent);

    if (btn.classList.contains("plus")) {
      quantity++;
    } else if (btn.classList.contains("minus") && quantity > 1) {
      quantity--;
    }

    quantitySpan.textContent = quantity;
  });
});

// Handle delete buttons
const deleteButtons = document.querySelectorAll(".delete-item");
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cartItem = btn.closest(".cart-item");
    cartItem.remove();
  });
});

// Handle favorite buttons
const favoriteButtons = document.querySelectorAll(".favorite");
favoriteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
  });
});

// Handle add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cartCount = document.querySelector(".cart-count");
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
  });
});
