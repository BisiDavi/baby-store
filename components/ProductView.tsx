import Image from "next/image";

import { formatPrice } from "@/utils/formatPrice";
import getCostPrice from "@/utils/getCostPrice";
import type { productType } from "@/types";
import Ratings from "./Ratings";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  const first4Images = product.images.slice(0, 4);
  const price = formatPrice(product.price);
  const oldPrice = getCostPrice(product.price, product.discountPercentage);
  const discount = Math.round(product.discountPercentage);

  return (
    <div className="w-full flex-col flex my-8">
      <div className="left w-full space-x-5 my-4 flex items-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={600}
          width={600}
          className="w-1/2 rounded-xl"
        />
        <ul className="thumblist grid gap-4 grid-cols-2 w-1/2">
          {first4Images.map((image) => (
            <li key={image} className="border p-2 rounded-lg flex items-center">
              <Image src={image} alt={product.title} height={500} width={500} />
            </li>
          ))}
        </ul>
      </div>
      <div className="right w-1/2 px-0">
        <p className="text-gray-500 font-medium">{product.brand}</p>
        <h3 className="text-2xl font-bold"> {product.title}</h3>
        <div className="discount text-orange-500">{discount} % discount</div>
        <div className="price flex space-x-2 mb-2">
          <h5 className="text-xl font-medium">${price}</h5>
          <h6 className="text- line-through font-medium">${oldPrice}</h6>
        </div>
        <Ratings ratings={product.rating} className="text-left mt-0" />
        <p className="mt-2">{product.description}</p>
      </div>
    </div>
  );
}
