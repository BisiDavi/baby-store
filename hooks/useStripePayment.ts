import axios from "axios";
import { useAppSelector } from "@/redux/store";
import type { cartType, lineItemsType } from "@/types";

export default function useStripePayment(cart: cartType | null) {
  const line_items: Array<lineItemsType> = [];
  const { checkoutDetails } = useAppSelector((state) => state.checkout);

  let customer_details: { [key: string]: string } = {};
  if (checkoutDetails) {
    customer_details.name = `${checkoutDetails.firstName} ${checkoutDetails.lastName}`;
    customer_details.address = checkoutDetails.deliveryAddress;
    customer_details.email = checkoutDetails.email;
  }

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
    customer_details,
    line_items,
    customer_email: checkoutDetails?.email,
  };

  function makePayment() {
    return axios.post("/api/stripe-server", { ...result });
  }

  return { makePayment };
}
