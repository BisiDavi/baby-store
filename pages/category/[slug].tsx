import axios from "axios";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import type { productType } from "@/types";
import BreadCrumb from "@/components/BreadCrumb";

interface Props {
  category: string;
  categoryProducts: productType[];
}

export default function CategoryPage({ categoryProducts, category }: Props) {
  return (
    <Layout title="Category">
      <section className="container mx-auto my-4 px-4 ">
        <BreadCrumb
          links={[{ name: "🏠 Home", link: "/" }, { name: category }]}
        />
        <h2 className="text-center font-bold text-2xl">
          All Products in {category} category
        </h2>
        <div className="content flex flex-col lg:flex-row mt-8 w-full">
          <div className="filter w-full lg:w-1/4"></div>
          <div className="products w-full lg:w-3/4">
            <TopProductGrid products={categoryProducts} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const categoryProducts = await axios.get(
    `https://dummyjson.com/products/category/${context.params.slug}`
  );

  console.log("categoryProducts", categoryProducts.data.products);

  return {
    props: {
      categoryProducts: categoryProducts.data.products,
      category: context.params.slug,
    },
  };
}
