import Image from "next/image";

import Tag from "@/components/Tag";
import { productType } from "@/types";

interface Props {
  selectedProduct: productType;
  setSelectedProduct: any;
  specialProductsContent: productType[];
}

export default function SpecialProductImage({
  selectedProduct,
  setSelectedProduct,
  specialProductsContent,
}: Props) {
  function onSelectImage(item: productType) {
    setSelectedProduct(item);
  }
  return (
    <div className="w-1/2 flex mr-14">
      <ul className="selectProduct w-1/4">
        {specialProductsContent.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => onSelectImage(item)}
              className="block mx-auto justify-center hover:opacity-50"
            >
              <Image
                src={item.imgs[0]}
                alt={item.name}
                height={100}
                width={135}
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mainProduct w-3/4 relative border flex rounded-xl">
        <Tag className="bg-blue-900 absolute top-4 z-5 left-4" />
        <Image
          src={selectedProduct.imgs[0]}
          alt={selectedProduct.name}
          height={500}
          width={500}
          className="rounded-xl flex mx-auto w-full"
        />
      </div>
    </div>
  );
}
