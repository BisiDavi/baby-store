import axios from "axios";
import { useAppSelector } from "@/redux/store";
import type { cartType, lineItemsType } from "@/types";

export default function useStripePayment(cart: cartType | null) {
  const line_items: Array<lineItemsType> = [];
  const { checkoutDetails } = useAppSelector((state) => state.checkout);

  if (cart) {
    cart.items.map((item) => {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: item.images,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      });
    });
  }

  const result = {
    line_items,
    customer_email: checkoutDetails?.email,
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
