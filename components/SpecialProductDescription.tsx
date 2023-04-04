import Button from "@/components/Button";
import Wishlist from "@/public/icon/Wishlist";
import PromoCounter from "@/components/PromoCounter";
import useCartMutation from "@/hooks/useCartMutation";
import useWishlistMutation from "@/hooks/useWishlistMutation";
import Price from "@/components/Price";
import type { productType } from "@/types";

interface Props {
  product: productType;
}

export default function SpecialProductDescription({ product }: Props) {
  const { useAddToCartMutation } = useCartMutation();
  const { mutate } = useAddToCartMutation();
  const { wishlist, useAddToWishlist }: any = useWishlistMutation();
  const { mutate: mutateAddToWishlist } = useAddToWishlist();

  const wishlistFill = wishlist.length > 0 ? "red" : "black";

  return (
    <div className="flex w-full -mr-1 lg:mr-0 pl-1 lg:w-1/2 bg-white lg:mx-auto my-4 lg:my-0 lg:mx-4 px-0 py-8 lg:py-12 lg:pr-6 rounded-lg shadow">
      <PromoCounter />
      <div className="pl-5 lg:pl-8">
        <h4 className="text-xl">{product.title}</h4>
        <div className="price-view flex my-4 flex-col">
          <Price price={product.price} className="flex" />
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
