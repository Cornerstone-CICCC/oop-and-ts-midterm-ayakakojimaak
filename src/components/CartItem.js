import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  handleAddCartItem() {
    this.props.context.addCartItem(this.props.item);
  }
  handleSubtractCartItem() {
    this.props.context.subtractCartItem(this.props.item);
  }

  render() {
    const li = document.createElement("div");
    li.classList.add("cart-item");
    li.innerHTML = `
        <img src="${this.props.item.image}" alt="${this.props.item.title}" />
        <div class="item-details">
          <h3>${this.props.item.title}</h3>
          <p class="price">$${this.props.item.price}</p>
          <div class="quantity-controls">
            <button class="quantity-btn minus">
              <i class="fas fa-minus"></i>
            </button>
            <span class="quantity">1</span>
            <button class="quantity-btn plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="delete-item">
          <i class="fas fa-trash"></i>
        </button>`;

    li.querySelector(".fa-plus").addEventListener("click", this.handleAddCartItem);
    li.querySelector(".fa-minus").addEventListener("click", this.handleAddCartItem);

    return li;
  }
}
