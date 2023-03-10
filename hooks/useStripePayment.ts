import axios from "axios";

import usePrice from "@/hooks/usePrice";
import type { cartType, lineItemsType } from "@/types";

export default function useStripePayment(cart: cartType | null, email: string) {
  const line_items: Array<lineItemsType> = [];
  const { rate, currency } = usePrice();

  if (cart) {
    cart.items.map((item) => {
      line_items.push({
        price_data: {
          currency: currency.code.toLocaleLowerCase(),
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * rate * 100),
        },
        quantity: item.quantity,
      });
    });
  }
  const emailAddress = email ? { customer_email: email } : "";

  const result = {
    ...emailAddress,
    line_items,
  };

  async function makePayment() {
    return await axios
      .post("/api/stripe-server", { ...result })
      .then((response) => {
        console.log("response", response);
        window.location.href = response.data.session.url;
      });
  }

  return { makePayment };
}
