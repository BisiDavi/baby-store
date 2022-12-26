import { useState } from "react";
import TopProductGrid from "@/components/TopProductGrid";
import topProductContent from "@/json/top-product.json";
import { productType } from "@/types";
import Button from "@/components/Button";

type topProductKeyType = "Featured" | "Latest" | "Bestseller";

export default function TopProductTabs() {
  const [products, setProducts] = useState<{
    group: productType[];
    active: string;
  }>({
    group: topProductContent.Featured,
    active: "Featured",
  });
  const tabs: topProductKeyType[] | any[] = Object.keys(topProductContent);

  function selectTabHandler(tabCategory: topProductKeyType) {
    const tabProducts = topProductContent[tabCategory];
    setProducts({ group: tabProducts, active: tabCategory });
  }
  return (
    <div className="mx-auto mt-4 justify-center flex flex-col">
      <div className="tab-group w-1/3 flex justify-between  justify-center mx-auto my-4 mb-8">
        {tabs.map((item) => {
          const activeButtonClassname =
            products.active === item ? "bg-blue-900" : "bg-gray-600";
          return (
            <Button
              key={item}
              className={`${activeButtonClassname} px-5 py-2 rounded-lg hover:opacity-80 text-white`}
              text={item}
              onClick={() => selectTabHandler(item)}
            />
          );
        })}
      </div>
      <TopProductGrid products={products.group} />
    </div>
  );
}
