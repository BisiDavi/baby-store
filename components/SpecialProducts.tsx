import { useState } from "react";

import SpecialProductDescription from "@/components/SpecialProductDescription";
import SpecialProductImage from "@/components/SpecialProductImage";
import specialProductsContent from "@/json/special-product.json";
import { productType } from "@/types";

export default function SpecialProducts() {
  const [selectedProduct, setSelectedProduct] = useState<productType>(
    specialProductsContent[0]
  );
  return (
    <div className="w-full my-8 py-4">
      <h3 className="text-3xl font-bold text-center mb-4">Special Products</h3>
      <p className="text-center mb-10 text-lg w-1/2 mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="product-view w-full bg-gray-100 justify-between my-4 items-end flex p-10">
        <SpecialProductImage
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          specialProductsContent={specialProductsContent}
        />
        <SpecialProductDescription product={selectedProduct} />
      </div>
    </div>
  );
}
