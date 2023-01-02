import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Button from "@/components/Button";
import ProductSlider from "@/components/ProductSlider";
import { fetchCategories, fetchProducts } from "@/utils/apiRequest";
import ProductLoader from "@/components/ProductLoader";
import useMediaQuery from "@/hooks/useMediaQuery";
import SpinnerRipple from "./SpinnerRipple";

export default function CategoryTabView() {
  const { data, status } = useQuery(["fetch-categories"], fetchCategories);
  const [selectedCategory, setSelectedCategory] = useState("home-decoration");
  const { data: productData, status: productStatus } = useQuery(
    ["fetch-products", selectedCategory],
    () => fetchProducts(`/category/${selectedCategory}`),
    { enabled: !!selectedCategory }
  );
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const topCategories = status === "success" ? data.data.slice(5, 8) : [];

  const lastCategories =
    status === "success"
      ? data.data.slice(data.data.length - 4, data.data.length)
      : [];
  const categories = [...topCategories, ...lastCategories];

  function selectTabHandler(tabCategory: string) {
    setSelectedCategory(tabCategory);
  }

  return (
    <div className="mx-auto mt-4 lg:px-0 justify-center flex flex-col">
      <div className="tab-group overflow-scroll flex-nowrap w-full space-x-4 flex lg:justify-center mx-auto my-4 mb-8">
        {status === "error" ? (
          <p>Error fetching tabs</p>
        ) : status === "loading" ? (
          <SpinnerRipple centerRipple />
        ) : (
          categories.map((item) => {
            const activeButtonClassname =
              selectedCategory === item ? "bg-blue-900" : "bg-gray-600";
            return (
              <Button
                key={item}
                className={`${activeButtonClassname} text-xs lg:text-base px-4 lg:px-5 py-1 lg:py-2 rounded-lg hover:opacity-80 text-white`}
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
        <>{mobileDevice ? <SpinnerRipple centerRipple /> : <ProductLoader />}</>
      ) : (
        <ProductSlider products={productData.data.products} />
      )}
    </div>
  );
}
