export class CartContext {
  constructor() {
    this.cartItems = [];
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  addCartItem(item) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }

    this.notify();
  }

  subtractCartItem(item) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1 && this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity -= 1;
    }
    this.notify();
  }

  removeCartItem(item) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    console.log(this.cartItems);

    this.notify();
  }
}
