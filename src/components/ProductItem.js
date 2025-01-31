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
    const li = document.createElement("div");
    li.classList.add("product-card");
    li.innerHTML = `
        <img src="${this.props.item.image}" alt="${this.props.item.title}" />
        <h3>${this.props.item.title}</h3>
        <p class="price">$${this.props.item.price}</p>
        <div class="product-actions">
          <button class="add-to-cart">
            <i class="fas fa-cart-plus"></i>
          </button>
          <button class="favorite">
            <i class="far fa-heart"></i>
          </button>
        </div>`;

    li.querySelector(".add-to-cart").addEventListener("click", this.handleAddCartItem);

    return li;
  }
}
