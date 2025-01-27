import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.props.context.subscribe(this.updateCart);
    this.productListElement = document.createElement("ul");
    this.updateCart();
  }
  updateCart() {
    this.productListElement.innerHTML = "";
    this.props.context.cartItems.forEach((item) => {
      const cartItem = new CartItem({ item: item, context: this.props.context });
      this.productListElement.appendChild(cartItem.render());
    });
  }

  render() {
    return this.productListElement;
  }
}
