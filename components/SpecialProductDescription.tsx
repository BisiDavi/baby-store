import Button from "@/components/Button";
import Wishlist from "@/public/icon/Wishlist";
import { productType } from "@/types";
import PromoCounter from "@/components/PromoCounter";
import Ratings from "./Ratings";
import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";

interface Props {
  product: productType;
}

export default function SpecialProductDescription({ product }: Props) {
  const price = formatPrice(product.price);
  const costPrice = getCostPrice(product.price, product.discountPercentage);
  return (
    <div className="flex w-1/2 bg-white mx-4 py-12 pr-6 rounded-lg shadow">
      <PromoCounter />
      <div className="pl-8">
        <h4 className="text-xl">{product.title}</h4>
        <div className="price-view flex my-4 flex-col">
          <div className="price flex">
            <h5 className="text-xl font-bold">${price}</h5>
            <h6 className="text-md ml-3 line-through font-bold">
              ${costPrice}
            </h6>
          </div>
          <Ratings ratings={product.rating} className="text-left" />
        </div>
        <p className="mb-16">{product.description}</p>
        <div className="button-group flex items-center mb-4">
          <Button
            className="rounded-md shadow h-10 px-4 mr-4 border"
            text="Add to Cart"
          />
          <Button
            className="rounded border shadow h-10 px-4"
            icon={<Wishlist />}
          />
        </div>
      </div>
    </div>
  );
}
