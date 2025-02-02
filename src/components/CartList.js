import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.props.context.subscribe(this.updateCart);
    this.productListElement = document.createElement("div");
    this.productListElement.classList.add("modal-content");
    this.updateCart();
  }
  closeModal() {
    const cartModal = document.getElementById("cartModal");
    if (cartModal) {
      cartModal.style.display = "none";
    }
  }
  updateCart() {
    const totalPrice = this.props.context.cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);

    this.productListElement.innerHTML = `
            <div class="modal-header">
              <h2>Your Cart</h2>
              <button class="close-modal">&times;</button>
            </div>
            <div class="cart-items"></div>
            <div class="cart-footer">
              <div class="cart-total">
                <span>Total:</span>
                <span class="total-amount">$${totalPrice}</span>
              </div>
              <button class="proceed-btn">Proceed to Purchase</button>
            </div>`;
    this.props.context.cartItems.forEach((item) => {
      const cartItem = new CartItem({ item: item, context: this.props.context });
      this.productListElement.querySelector(".cart-items").appendChild(cartItem.render());
    });
    const closeModalBtn = this.productListElement.querySelector(".close-modal");
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", this.closeModal);
    }
  }

  render() {
    return this.productListElement;
  }
}
