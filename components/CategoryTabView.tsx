import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Button from "@/components/Button";
import ProductSlider from "@/components/ProductSlider";
import { fetchCategories, fetchProducts } from "@/utils/apiRequest";

export default function CategoryTabView() {
  const { data, status } = useQuery(["fetch-categories"], fetchCategories);
  const [selectedCategory, setSelectedCategory] = useState("womens-watches");
  const { data: productData, status: productStatus } = useQuery(
    ["fetch-products", selectedCategory],
    () => fetchProducts(`/category/${selectedCategory}`),
    { enabled: !!selectedCategory }
  );

  const topCategories =
    status === "success"
      ? data.data.slice(data.data.length - 7, data.data.length)
      : [];

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
          topCategories.map((item) => {
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
        <ProductSlider products={productData.data.products} />
      )}
    </div>
  );
}
