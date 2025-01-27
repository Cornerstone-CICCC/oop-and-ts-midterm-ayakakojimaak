import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
  }

  handleAddCartItem() {
    this.props.context.addCartItem(this.props.item);
  }

  render() {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${this.props.item.title}</span>
    <button class="add-cart-btn">Add to Cart</button>
    `;
    li.querySelector(".add-cart-btn").addEventListener("click", this.handleAddCartItem);

    return li;
  }
}
