import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import BreadCrumb from "@/components/BreadCrumb";
import { fetchCategories, fetchProducts } from "@/utils/apiRequest";
import ProductLoader from "@/components/ProductLoader";
import FilterCategory from "@/components/FilterCategory";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("?limit=100");
  const { data, status } = useQuery(
    [`all-products-${selectedCategory}`],
    () => fetchProducts(selectedCategory),
    {
      enabled: !!selectedCategory,
    }
  );
  const { data: categoryData, status: categoryStatus } = useQuery(
    ["fetchCategories"],
    fetchCategories
  );

  return (
    <Layout title="Buy our products at a discounted price">
      <section className="container mx-auto my-4 px-4 lg:px-0">
        <BreadCrumb
          links={[{ name: "🏠 Home", link: "/" }, { name: "All Products" }]}
        />
        <h2 className="text-center text-2xl font-bold">All Products</h2>
        <div className="content space-y-6 lg:space-y-0 lg:space-x-6 px-0 flex items-start pt-8 flex-col lg:flex-row justify-between">
          <FilterCategory
            categoryData={categoryData}
            categoryStatus={categoryStatus}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="products w-full px-0 lg:w-4/5">
            {status === "error" ? (
              <p>Unable to fetch products</p>
            ) : status === "loading" ? (
              <ProductLoader
                className="lg:grid lg:grid-cols-3"
                arrayCount={6}
              />
            ) : (
              <TopProductGrid products={data.data.products} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
