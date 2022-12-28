import { cartType } from "@/types";

export function updateCartProductQuantity(
  cart: cartType,
  productIndex: number,
  type: "add" | "minus"
) {
  const quantity =
    type === "add"
      ? cart.items[productIndex].quantity + 1
      : cart.items[productIndex].quantity - 1;

  cart.items[productIndex] = {
    ...cart.items[productIndex],
    quantity,
  };
}

export function updateCartQuantity(cart: cartType | null) {
  if (cart) {
    let cartQuantity = 0;
    let amount = 0;
    cart.items.map((item) => {
      const itemAmount = item.price * item.quantity;
      amount += itemAmount;
      cartQuantity += item.quantity;
    });
    cart = {
      ...cart,
      quantity: cartQuantity,
      amount,
    };
    return cart;
  }
}
