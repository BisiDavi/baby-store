import { useState } from "react";
import specialProductsContent from "@/json/special-product.json";
import Image from "next/image";

export default function SpecialProductImage() {
  const [selectedProduct, setSelectedProduct] = useState(
    specialProductsContent[0]
  );
  return (
    <div>
      <ul className="selectProduct">
        {specialProductsContent.map((item, index) => (
          <li key={item.name}>
            <Image
              src={item.imgs[0]}
              alt={item.name}
              height={100}
              width={100}
            />
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
