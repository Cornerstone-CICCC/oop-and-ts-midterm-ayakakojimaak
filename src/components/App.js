import { Component } from "../common/Component.js";
import { CartContext } from "../contexts/CartContext.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";
import { CartButton } from "./CartButton.js";

export class App extends Component {
  render() {
    const app = document.getElementById("app");
    const cartModal = document.getElementById("cartModal");
    const cartButtons = document.getElementById("cartButtons");
    const cartContext = new CartContext();

    const productList = new ProductList({ context: cartContext });
    const cartList = new CartList({ context: cartContext });
    const cartButton = new CartButton({ context: cartContext });
    app.appendChild(productList.render());
    cartModal.appendChild(cartList.render());
    cartButtons.appendChild(cartButton.render());
  }
}
