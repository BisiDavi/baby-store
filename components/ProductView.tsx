import Image from "next/image";

import Ratings from "@/components/Ratings";
import Button from "@/components/Button";
import ShoppingCart from "@/public/icon/ShoppingCart";
import AddPlus from "@/public/icon/AddPlus";
import useCartMutation from "@/hooks/useCartMutation";
import Price from "@/components/Price";
import type { productType } from "@/types";
import { useRouter } from "next/router";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  const category = product.category.toUpperCase();
  const { useAddToCartMutation } = useCartMutation();
  const { mutate } = useAddToCartMutation();
  const router = useRouter();

  return (
    <div className="w-full flex-col px-4 lg:px-0 flex my-8">
      <div className="category border rounded-full fit-content px-4 bg-blue-900 text-white py-1">
        {category}
      </div>
      <div className="flex flex-col lg:flex-row space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 my-4 lg:items-start">
        <div className="image-wrapper lg:w-1/2 w-full bg-white rounded-xl px-8 py-4">
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            className="w-full"
            blurDataURL={product.image}
            placeholder="blur"
            priority={true}
          />
        </div>
        <div className="text-content w-full lg:w-1/2 flex flex-col bg-white p-6 rounded-lg shadow">
          <div className="order-2  my-4 text-content w-full px-0 flex flex-col">
            <h3 className="text-2xl font-bold"> {product.title}</h3>
            <Price price={product.price} className="text-xl" />
            <Ratings ratings={product.rating} className="text-left" />
            <p className="mt-2">{product.description}</p>
          </div>
          <div className="cta order-1 w-full mt-4 lg:mb-0 sm:items-start lg:order-2  flex justify-between lg:flex-row lg:w-2/3">
            <Button
              text="Add to Cart"
              className="bg-blue-500 flex items-center text-white rounded-lg px-4 py-1 hover:opacity-80"
              icon={<AddPlus fill="white" className="mr-3" />}
              onClick={() => mutate(product)}
            />
            <Button
              icon={<ShoppingCart fill="white" className="mr-3" />}
              text="Buy Now"
              className="flex items-center bg-red-500 text-white hover:opacity-80 rounded-lg px-4 py-1"
              onClick={() =>
                mutate(product, {
                  onSuccess: () => {
                    router.push("/checkout")
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
