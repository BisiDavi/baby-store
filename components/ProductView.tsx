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
          src={product.thumbnail}
          alt={product.title}
          height={500}
          width={500}
          className="w-full rounded-xl"
        />
        <ul className="thumblist space-x-4 flex items-center my-4">
          {product.images.map((image) => (
            <li key={image}>
              <Image src={image} alt={product.title} height={100} width={100} />
            </li>
          ))}
        </ul>
      </div>
      <div className="right w-1/2">
        <p>{}</p>
        <h3 className="text-xl font-bold"> {product.title}</h3>
        <div className="price flex space-x-2">
          <h5 className="text-xl font-medium">${product.price}</h5>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
