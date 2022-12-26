import { useState } from "react";
import TopProductGrid from "@/components/TopProductGrid";
import topProductContent from "@/json/top-product.json";
import { productType } from "@/types";
import Button from "@/components/Button";

type topProductKeyType = "Featured" | "Latest" | "Bestseller";

export default function TopProductTabs() {
  const [products, setProducts] = useState<productType[]>(
    topProductContent.Featured
  );
  const tabs: topProductKeyType[]| any[] = Object.keys(topProductContent);

  function selectTabHandler(tabCategory: topProductKeyType) {
    const tabProducts = topProductContent[tabCategory];
    setProducts(tabProducts);
  }
  return (
    <div className="mx-auto mt-4 justify-center flex flex-col">
      <div className="tab-group w-1/3 flex justify-between  justify-center mx-auto my-4">
        {tabs.map((item) => (
          <Button
            key={item}
            className="bg-blue-900 px-4 py-1 rounded-lg text-white"
            text={item}
            onClick={() => selectTabHandler(item)}
          />
        ))}
      </div>
      <TopProductGrid products={products} />
    </div>
  );
}
