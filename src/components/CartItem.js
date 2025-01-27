import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${this.props.item.title}</span>
    `;
    return li;
  }
}
