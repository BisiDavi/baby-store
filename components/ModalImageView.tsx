import Image from "next/image";
import { useState } from "react";
import type { productType } from "@/types";

interface Props {
  product: productType;
}

export default function ModalImageView({ product }: Props) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const first4Images = product ? product?.images.slice(0, 4) : [];

  function selectImageHandler(image: string) {
    setMainImage(image);
  }

  return (
    <div className="left w-1/2 justify-between flex flex-col">
      <Image
        src={mainImage}
        alt={product.title}
        height={500}
        width={500}
        className="h-96 max-w-xs mx-auto"
      />
      <ul className="image-group flex space-x-2 mt-4">
        {first4Images.map((item) => (
          <li
            key={product.id}
            className="border p-2 rounded flex items-center justify-center"
          >
            <Image
              src={item}
              alt={product.title}
              height={100}
              width={100}
              className="max-h-24"
              onClick={() => selectImageHandler(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
