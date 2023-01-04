import { useQuery } from "@tanstack/react-query";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import BreadCrumb from "@/components/BreadCrumb";
import { fetchAllProducts } from "@/utils/apiRequest";
import ProductLoader from "@/components/ProductLoader";
import { useState } from "react";

export default function ProductsPage() {
  const { data, status } = useQuery(["all-products"], fetchAllProducts);
  const [selectedCategory, setSelectedCategory] = useState("home-decoration");

  return (
    <Layout title="Buy our products at a discounted price">
      <section className="container mx-auto my-4 px-4 lg:px-0">
        <BreadCrumb
          links={[{ name: "🏠 Home", link: "/" }, { name: "All Products" }]}
        />
        <h2 className="text-center text-2xl font-bold">All Products</h2>
        <div className="content space-x-4 px-0 flex items-start pt-8 flex-col lg:flex-row">
          <div className="filters p-4 w-1/4 rounded border">
            <h3 className="font-bold text-xl">Filter By Category</h3>
          </div>
          <div className="products w-full px-0 lg:w-3/4">
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
