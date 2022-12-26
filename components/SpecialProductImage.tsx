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
    <div className="w-1/2 flex space-x-4 mr-14">
      <ul className="selectProduct bg-white w-1/4 space-y-6">
        {specialProductsContent.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelectImage(item)}
              className="block mx-auto justify-center hover:opacity-50"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={135}
                className="h-1/2 w-1/2 mx-auto"
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mainProduct items-center bg-white w-3/4 relative border flex rounded-xl">
        <Tag className="bg-blue-900 absolute top-4 z-5 left-4" />
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.title}
          height={400}
          width={400}
          className="rounded-xl flex mx-auto w-3/5 justify-center items-center "
        />
      </div>
    </div>
  );
}
