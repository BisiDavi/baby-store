import { formatPrice } from "./formatPrice";

export default function getCostPrice(price: number, discount: number) {
  const actualDiscount = Math.round(discount);
  const costPrice = actualDiscount + price;
  return formatPrice(costPrice);
}
