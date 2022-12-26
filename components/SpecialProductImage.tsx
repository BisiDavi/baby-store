import { useState } from "react";
import Image from "next/image";

import specialProductsContent from "@/json/special-product.json";
import Tag from "@/components/Tag";
import { productType } from "@/types";

export default function SpecialProductImage() {
  const [selectedProduct, setSelectedProduct] = useState<productType>(
    specialProductsContent[0]
  );

  function onSelectImage(item: productType) {
    setSelectedProduct(item);
  }
  return (
    <div>
      <Tag />
      <ul className="selectProduct">
        {specialProductsContent.map((item, index) => (
          <li key={item.name}>
            <button onClick={() => onSelectImage(item)} className="block">
              <Image
                src={item.imgs[0]}
                alt={item.name}
                height={100}
                width={100}
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mainProduct">
        <Image
          src={selectedProduct.imgs[0]}
          alt={selectedProduct.name}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
