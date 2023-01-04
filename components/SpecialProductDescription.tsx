import Button from "@/components/Button";
import Wishlist from "@/public/icon/Wishlist";
import PromoCounter from "@/components/PromoCounter";
import Ratings from "@/components/Ratings";
import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";
import useCartMutation from "@/hooks/useCartMutation";
import type { productType } from "@/types";
import useWishlistMutation from "@/hooks/useWishlistMutation";

interface Props {
  product: productType;
}

export default function SpecialProductDescription({ product }: Props) {
  const price = formatPrice(product.price);
  const costPrice = getCostPrice(product.price, product.discountPercentage);
  const { useAddToCartMutation } = useCartMutation();
  const { mutate } = useAddToCartMutation();
  const { wishlist, useAddToWishlist } = useWishlistMutation();
  const { mutate: mutateAddToWishlist } = useAddToWishlist();

  const checkForWishlist = wishlist.filter(item => item.id === product.id)[0]
  const wishlistFill = checkForWishlist ? "red" : "black"

  return (
    <div className="flex w-full -mr-1 lg:mr-0 pl-1 lg:w-1/2 bg-white lg:mx-auto my-4 lg:my-0 lg:mx-4 px-0 py-8 lg:py-12 lg:pr-6 rounded-lg shadow">
      <PromoCounter />
      <div className="pl-5 lg:pl-8">
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
            onClick={() => mutate(product)}
          />
          <Button
            className="rounded border shadow h-10 px-4 hover:bg-gray-900"
            icon={<Wishlist fill={wishlistFill} />}
            onClick={() => mutateAddToWishlist(product)}
          />
        </div>
      </div>
    </div>
  );
}
