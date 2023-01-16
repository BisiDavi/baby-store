import { formatPrice } from "@/utils/formatPrice";

export default function getCostPrice(
  price: number,
  discount: number,
  rate: number
) {
  const actualDiscount = Math.round(discount);
  const costPrice = actualDiscount + price;
  const itemCostPrice = costPrice * rate;
  return formatPrice(itemCostPrice);
}
