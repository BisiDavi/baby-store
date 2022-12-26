import BreadCrumb from "@/components/BreadCrumb";
import ProductView from "@/components/ProductView";
import Layout from "@/layout";
import products from "@/json/products.json";
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
  const breadcrumbLink = getBreadcrumblink(product.name);
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
  const product = products.filter(
    (item) => toSlug(item.name) === context.params.slug
  )[0];
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: products.map((item) => {
      return { params: { slug: toSlug(item.name) } };
    }),
    fallback: false,
  };
}
