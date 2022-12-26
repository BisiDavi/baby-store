import { useState } from "react";

import SpecialProductDescription from "@/components/SpecialProductDescription";
import SpecialProductImage from "@/components/SpecialProductImage";
import type { productType } from "@/types";

interface Props {
  products: productType[];
}

export default function SpecialProductView({ products }: Props) {
  const product = products[0];
  const [selectedProduct, setSelectedProduct] = useState<productType>(product);
  return (
    <div className="product-view w-full mx-auto bg-gray-100 justify-between my-4 items-end flex p-10">
      <SpecialProductImage
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        specialProductsContent={products}
      />
      <SpecialProductDescription product={selectedProduct} />
    </div>
  );
}
