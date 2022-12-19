import Layout from "@/layout";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import Banners from "@/components/Banners";
import TopratedProduct from "@/components/TopratedProduct";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <InfoList />
      <TopratedProduct />
      <Banners />
      <Newsletter />
    </Layout>
  );
}
