import Image from "next/image";

import type { productType } from "@/types";

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
    <div className="w-full lg:w-1/2 mx-auto lg:mx-0 flex space-x-4 lg:mr-14">
      <ul className="selectProduct lg:bg-white w-1/4 lg:w-1/4 space-y-6 rounded-lg">
        {specialProductsContent.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelectImage(item)}
              className="block mx-auto justify-center hover:opacity-50 my-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={135}
                className="h-1/2 w-2/3 mx-auto"
                blurDataURL={item.image}
                placeholder="blur"
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mainProduct items-center bg-white w-4/5 lg:w-3/4 relative border flex rounded-xl">
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.title}
          height={400}
          width={400}
          className="rounded-xl flex mx-auto w-3/5 justify-center items-center "
          blurDataURL={selectedProduct.image}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
