import usePrice from "@/hooks/usePrice";
import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";

interface Props {
  price: number;
  discountPercentage: number;
  className?: string;
}

export default function Price({
  price,
  discountPercentage,
  className = "mx-auto justify-center items-center",
}: Props) {
  const { rate, currency } = usePrice();
  const _actualPrice = rate * price;
  const actualPrice = formatPrice(_actualPrice);
  const costPrice = getCostPrice(price, discountPercentage, rate);
  return (
    <div className={`price-view flex space-x-2  ${className}  `}>
      <h5 className="font-bold text-center text-lg">
        {currency?.value}
        {actualPrice}
      </h5>
      <h6 className="font-bold text-center line-through text-sm">
        {currency?.value}
        {costPrice}
      </h6>
    </div>
  );
}
