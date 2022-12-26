import Image from "next/image";
import type { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  return (
    <div className="w-full flex space-x-4">
      <div className="left w-1/2">
        <Image
          src={product.imgs[0]}
          alt={product.name}
          height={500}
          width={500}
          className="w-full rounded-xl"
        />
      </div>
      <div className="right w-1/2">
        <p>{}</p>
        <h3 className="text-xl font-bold"> {product.name}</h3>
        <div className="price flex space-x-2">
          <h5 className="text-xl font-medium">${product.price}</h5>
          <h6 className="text-lg">${product.oldPrice}</h6>
        </div>
        <p>{product.pageDescription}</p>
      </div>
    </div>
  );
}
