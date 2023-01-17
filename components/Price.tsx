import usePrice from "@/hooks/usePrice";
import { formatPrice } from "@/utils/formatPrice";

interface Props {
  price: number;
  className?: string;
}

export default function Price({
  price,
  className = "mx-auto justify-center items-center",
}: Props) {
  const { rate, currency } = usePrice();
  const _actualPrice = rate * price;
  const actualPrice = formatPrice(_actualPrice);
  return (
    <div className={`price-view flex space-x-2  ${className}  `}>
      <h5 className="font-bold text-center text-lg">
        {currency?.value}
        {actualPrice}
      </h5>
    </div>
  );
}
