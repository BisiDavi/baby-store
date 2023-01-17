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
  console.log("categoryProducts", categoryProducts);
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
  async function getCategory() {
    const result: any = [];
    const formatSlug =
      context.params.slug === "mens-clothing"
        ? "men's clothing"
        : context.params.slug === "womens-clothing"
        ? "women's clothing"
        : context.params.slug;

    return fetch(`https://fakestoreapi.com/products/category/${formatSlug}`)
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        result.push(item);
      })
      .then(() => {
        return result[0];
      });
  }
  return {
    props: {
      categoryProducts: await getCategory(),
      category: context.params.slug,
    },
  };
}
