import { useQuery } from "@tanstack/react-query";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import { fetchAllProducts } from "@/utils/apiRequest";
import BreadCrumb from "@/components/BreadCrumb";

export default function ProductsPage() {
  const { data, status } = useQuery(["all-products"], fetchAllProducts);

  return (
    <Layout title="Buy our products at a discounted price">
      <section className="container mx-auto my-4 px-4 lg:px-0">
        <BreadCrumb
          links={[{ name: "🏠 Home", link: "/" }, { name: "All Products" }]}
        />

        <h2 className="text-center text-2xl font-bold">All Products</h2>
        <div className="content px-0 flex items-start flex-col lg:flex-row">
          <div className="filters w-1/4"></div>
          <div className="products w-full px-0 lg:w-3/4 mt-8">
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
