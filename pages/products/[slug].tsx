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

export async function getServerSideProps(context: any) {
  const product = await axios.get(
    `https://fakestoreapi.com/products/${context.query.id}`
  );

  return {
    props: {
      product: product.data,
    },
  };
}
