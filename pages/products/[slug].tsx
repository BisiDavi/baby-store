import BreadCrumb from "@/components/BreadCrumb";
import Layout from "@/layout";
import products from "@/json/products.json";
import toSlug from "@/utils/toSlug";
import { productType } from "@/types";

interface Props {
  product: productType;
}

export default function ProductPage({ product }: Props) {
  console.log("product", product);

  return (
    <Layout>
      <BreadCrumb
        links={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: product.name },
        ]}
      />
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
