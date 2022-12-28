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
  const fPrice = formatPrice(price);
  const costPrice = getCostPrice(price, discountPercentage);

  return (
    <div className={`price-view flex space-x-2  ${className}  `}>
      <h5 className="font-bold text-center text-lg">${fPrice}</h5>
      <h6 className="font-bold text-center line-through text-sm">
        ${costPrice}
      </h6>
    </div>
  );
}
