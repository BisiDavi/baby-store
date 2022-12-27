import axios from "axios";

import BreadCrumb from "@/components/BreadCrumb";
import ProductView from "@/components/ProductView";
import Layout from "@/layout";
import type { productType } from "@/types";
import toSlug from "@/utils/toSlug";

interface Props {
  product: productType;
}

const getBreadcrumblink = (name: string, category: string) => {
  const categoryLink = toSlug(category);
  return [
    { name: "Home", link: "/" },
    { name: "products", link: "/products" },
    { name: category, link: `/category/${categoryLink}` },
    { name },
  ];
};

export default function ProductPage({ product }: Props) {
  const breadcrumbLink = getBreadcrumblink(product.title, product.category);
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
    `https://dummyjson.com/products/${context.query.id}`
  );

  return {
    props: {
      product: product.data,
    },
  };
}
