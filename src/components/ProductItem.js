import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddCartItem = this.handleAddCartItem.bind(this);
    this.isFavorited = false;
  }

  handleAddCartItem() {
    this.props.context.addCartItem(this.props.item);
  }

  handleFavorite(event) {
    this.isFavorited = !this.isFavorited;
    const icon = event.currentTarget.querySelector("i");

    if (this.isFavorited) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
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
    li.querySelector(".favorite").addEventListener("click", this.handleFavorite);

    return li;
  }
}
