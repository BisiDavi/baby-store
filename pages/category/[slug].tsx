import axios from "axios";

import TopProductGrid from "@/components/TopProductGrid";
import Layout from "@/layout";
import BreadCrumb from "@/components/BreadCrumb";
import type { productType } from "@/types";

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
        <h2 className="text-center font-bold mb-8 text-2xl">
          All Products in {category} category
        </h2>
        <TopProductGrid products={categoryProducts} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const categoryProducts = await axios.get(
    `https://dummyjson.com/products/category/${context.params.slug}`
  );

  return {
    props: {
      categoryProducts: categoryProducts.data.products,
      category: context.params.slug,
    },
  };
}
