import { Component } from "../common/Component.js";

export class CartButton extends Component {
  constructor(props) {
    super(props);
    this.updateCartButton = this.updateCartButton.bind(this);
    this.props.context.subscribe(this.updateCartButton);

    this.cartButton = document.createElement("div");
    this.cartButton.innerHTML = `
      <button id="cartBtn" class="cart-btn">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">0</span>
      </button>`;
    this.cartCountElement = this.cartButton.querySelector(".cart-count");
    this.updateCartButton();
  }

  updateCartButton() {
    console.log(this.props.context.cartItems);
    const totalQuantity = this.props.context.cartItems
      ? this.props.context.cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

    this.cartCountElement.textContent = totalQuantity;
    this.cartCountElement.style.display = totalQuantity > 0 ? "inline-block" : "none";
  }

  render() {
    return this.cartButton;
  }
}
