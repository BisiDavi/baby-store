import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";

interface Props {
  price: number;
  discountPercentage: number;
}

export default function Price({ price, discountPercentage }: Props) {
  const fPrice = formatPrice(price);
  const costPrice = getCostPrice(price, discountPercentage);

  return (
    <div className="price-view flex mx-auto space-x-2 justify-center items-center">
      <h5 className="font-bold text-center text-lg">${fPrice}</h5>
      <h6 className="font-bold text-center line-through text-sm">
        ${costPrice}
      </h6>
    </div>
  );
}
