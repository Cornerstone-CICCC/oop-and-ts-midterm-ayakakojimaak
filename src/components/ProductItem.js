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
    li.classList.add("col");
    li.innerHTML = `
        <div class="card h-100">
          <img src="${this.props.item.image}" class="card-img-top" alt="${this.props.item.title}">
          <div class="card-body">
            <h5 class="card-title">${this.props.item.title}</h5>
            <p class="card-text">${this.props.item.description}</p>
            <p class="fw-bold">Price: ${this.props.item.price}</p>
            <p class="text-muted">Rating: ${this.props.item.rating.rate} (${this.props.item.rating.count} reviews)</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <button class="add-cart-btn btn btn-primary">Add to Cart</button>
            <div>
              <button class="btn btn-secondary me-2">-</button>
              <span class="fw-bold">0</span>
              <button class="btn btn-secondary ms-2">+</button>
            </div>
          </div>
        </div>`;

    li.querySelector(".add-cart-btn").addEventListener("click", this.handleAddCartItem);

    return li;
  }
}
