import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import TopProductGrid from "@/components/TopProductGrid";
import Button from "@/components/Button";
import { fetchCategories, fetchProducts } from "@/utils/apiRequest";

export default function CategoryTabView() {
  const { data, status } = useQuery(["fetch-categories"], fetchCategories);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const { data: productData, status: productStatus } = useQuery(
    ["fetch-products", selectedCategory],
    () => fetchProducts(`/category/${selectedCategory}`),
    { enabled: !!selectedCategory }
  );

  function selectTabHandler(tabCategory: string) {
    setSelectedCategory(tabCategory);
  }
  return (
    <div className="mx-auto mt-4 justify-center flex flex-col">
      <div className="tab-group space-x-4 flex justify-between  justify-center mx-auto my-4 mb-8">
        {status === "error" ? (
          <p>Error fetching tabs</p>
        ) : status === "loading" ? (
          <p>fetching tabs</p>
        ) : (
          data.data.map((item) => {
            const activeButtonClassname =
              selectedCategory === item ? "bg-blue-900" : "bg-gray-600";
            return (
              <Button
                key={item}
                className={`${activeButtonClassname} px-5 py-2 rounded-lg hover:opacity-80 text-white`}
                text={item.toUpperCase()}
                onClick={() => selectTabHandler(item)}
              />
            );
          })
        )}
      </div>
      {productStatus === "error" ? (
        <p>unable to fetch products</p>
      ) : productStatus === "loading" ? (
        <p>fetching products</p>
      ) : (
        <TopProductGrid products={productData?.data} />
      )}
    </div>
  );
}
