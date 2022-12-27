import { useQuery } from "@tanstack/react-query";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import { fetchAllProducts } from "@/utils/apiRequest";

export default function ProductsPage() {
  const { data, status } = useQuery(["all-products"], fetchAllProducts);

  return (
    <Layout title="Buy our products at a discounted price">
      <section className="container mx-auto my-4">
        <h2 className="text-center text-2xl font-bold">All Products</h2>
        <div className="content flex items-start">
          <div className="filters w-1/4"></div>
          <div className="products w-3/4 mt-4">
            {status === "error" ? (
              <p>Unable to fetch products</p>
            ) : status === "loading" ? (
              <p>Fetching product </p>
            ) : (
              <TopProductGrid products={data.data.products} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
