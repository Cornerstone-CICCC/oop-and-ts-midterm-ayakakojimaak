import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.productItems = [];
  }
  async getProductItems() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.productItems = data;
    } catch (error) {
      this.productItems = [];
    }
  }
  render() {
    const list = document.createElement("ul");
    this.getProductItems().then(() => {
      this.productItems.forEach((item) => {
        console.log(item);

        const productItem = new ProductItem({ item: item });
        list.appendChild(productItem.render());
      });
    });

    return list;
  }
}
