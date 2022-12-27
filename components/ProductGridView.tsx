import Image from "next/image";
import { useState } from "react";
import type { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductGridView({ product }: Props) {
  const first4Images = product.images.slice(0, 4);
  const [mainImage, setMainImage] = useState(product.thumbnail);

  function onSelectImage(image: string) {
    setMainImage(image);
  }

  return (
    <div className="images w-full space-y-6 lg:space-y-0 lg:space-x-5 my-4 lg:flex-row flex flex-col items-center">
      <Image
        src={mainImage}
        alt={product.title}
        height={600}
        width={600}
        className="w-full lg:w-1/2 rounded-xl"
      />
      <ul className="thumblist grid gap-4 grid-cols-2 w-full lg:w-1/2">
        {first4Images.map((image) => (
          <li key={image} className="border p-2 rounded-lg flex items-center">
            <button onClick={() => onSelectImage(image)}>
              <Image src={image} alt={product.title} height={500} width={500} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
