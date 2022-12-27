import Image from "next/image";

import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";
import type { productType } from "@/types";
import Ratings from "./Ratings";
import Button from "./Button";
import ShoppingCart from "@/public/icon/ShoppingCart";
import AddPlus from "@/public/icon/AddPlus";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  const first4Images = product.images.slice(0, 4);
  const price = formatPrice(product.price);
  const oldPrice = getCostPrice(product.price, product.discountPercentage);
  const discount = Math.round(product.discountPercentage);
  const category = product.category.toUpperCase();

  return (
    <div className="w-full flex-col flex my-8">
      <div className="category border rounded-full fit-content px-4 bg-blue-900 text-white py-1">
        {category}
      </div>
      <div className="images w-full space-x-5 my-4 flex items-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={600}
          width={600}
          className="w-1/2 rounded-xl"
        />
        <ul className="thumblist  grid gap-4 grid-cols-2 w-1/2">
          {first4Images.map((image) => (
            <li key={image} className="border p-2 rounded-lg flex items-center">
              <Image src={image} alt={product.title} height={500} width={500} />
            </li>
          ))}
        </ul>
      </div>
      <div className="text-cotent flex items-center">
        <div className="text-content w-1/2 px-0 flex flex-col">
          <p className="text-gray-500 font-medium">{product.brand}</p>
          <h3 className="text-2xl font-bold"> {product.title}</h3>
          <p className="fit-content text-orange-500 rounded-full border w-auto px-2 my-1 flex">
            {discount} % discount
          </p>
          <div className="price flex space-x-2">
            <h5 className="text-xl font-medium">${price}</h5>
            <h6 className="text- line-through font-medium">${oldPrice}</h6>
          </div>
          <Ratings ratings={product.rating} className="text-left" />
          <p className="mt-2">{product.description}</p>
        </div>
        <div className="cta justify-between flex w-1/4">
          <Button
            text="Add to Cart"
            className="bg-blue-500 flex items-center text-white rounded-lg px-4 py-1 hover:opacity-80"
            icon={<AddPlus fill="white" className="mr-3" />}
          />
          <Button
            icon={<ShoppingCart fill="white" className="mr-3" />}
            text="Buy Now"
            className="flex items-center bg-red-500 text-white hover:opacity-80 rounded-lg px-4 py-1"
          />
        </div>
      </div>
    </div>
  );
}
