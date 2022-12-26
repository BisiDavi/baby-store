import Button from "@/components/Button";
import Wishlist from "@/public/icon/Wishlist";
import { productType } from "@/types";
import PromoCounter from "@/components/PromoCounter";

interface Props {
  product: productType;
}

export default function SpecialProductDescription({ product }: Props) {
  return (
    <div className="flex w-1/2 bg-white mx-4 py-12 pr-6 rounded-lg shadow">
      <PromoCounter />
      <div className="pl-8">
        <h4 className="text-xl">{product.name}</h4>
        <p className="my-4">rating</p>
        <div className="price-view flex my-4 items-center">
          <h5 className="text-xl font-bold">${product.price}</h5>
          <h6 className="mx-1 text-lg line-through">${product.oldPrice}</h6>
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
          {/* <Button className="rounded" icon={} /> */}
        </div>
      </div>
    </div>
  );
}
