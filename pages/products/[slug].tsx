import axios from "axios";

import BreadCrumb from "@/components/BreadCrumb";
import ProductView from "@/components/ProductView";
import Layout from "@/layout";
import toSlug from "@/utils/toSlug";
import type { productType } from "@/types";

interface Props {
  product: productType;
}

const getBreadcrumblink = (name: string) => [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name },
];

export default function ProductPage({ product }: Props) {
  const breadcrumbLink = getBreadcrumblink(product.title);
  return (
    <Layout>
      <section className="container mx-auto">
        <BreadCrumb links={breadcrumbLink} />
        <ProductView product={product} />
      </section>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  console.log("slug", context.params);
  const product = await axios.get(
    `https://fakestoreapi.com/products/${context.params.id}`
  );

  return {
    props: {
      product: product.data,
    },
  };
}

export async function getStaticPaths() {
  const products: { data: productType[] } = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return {
    paths: products.data.map((item) => {
      return { params: { slug: toSlug(item.title) } };
    }),
    fallback: false,
  };
}
