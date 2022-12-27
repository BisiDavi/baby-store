import Image from "next/image";
import type { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductView({ product }: Props) {
  const first4Images = product.images.slice(0, 4);
  return (
    <div className="w-full flex-col flex space-x-4 my-8">
      <div className="left w-full space-x-5 flex items-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={500}
          width={500}
          className="w-1/2 rounded-xl"
        />
        <ul className="thumblist grid gap-4 grid-cols-2 w-1/2">
          {first4Images.map((image) => (
            <li key={image} className="border p-2 rounded-lg">
              <Image src={image} alt={product.title} height={500} width={500} />
            </li>
          ))}
        </ul>
      </div>
      <div className="right w-1/2">
        <p className="text-gray-500 font-medium">{product.brand}</p>
        <h3 className="text-xl font-bold"> {product.title}</h3>
        <div className="price flex space-x-2">
          <h5 className="text-xl font-medium">${product.price}</h5>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
