import axios from "axios";

import BreadCrumb from "@/components/BreadCrumb";
import ProductView from "@/components/ProductView";
import OtherCategoryProducts from "@/components/OtherCategoryProducts";
import Layout from "@/layout";
import toSlug from "@/utils/toSlug";
import type { productType } from "@/types";

interface Props {
  product: productType;
}

const getBreadcrumblink = (name: string, category: string) => {
  const categoryLink = toSlug(category);
  return [
    { name: "🏠 Home", link: "/" },
    { name: "products", link: "/products" },
    { name: category, link: `/category/${categoryLink}` },
    { name },
  ];
};

export default function ProductPage({ product }: Props) {
  const breadcrumbLink = getBreadcrumblink(product.title, product.category);
  return (
    <Layout title={`Buy ${product.title}`}>
      <section className="container mx-auto">
        <BreadCrumb links={breadcrumbLink} />
        <ProductView product={product} />
        <OtherCategoryProducts
          category={product.category}
          mainProductName={product.title}
        />
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
