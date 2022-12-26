import Layout from "@/layout";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import Banners from "@/components/Banners";
import TopratedProduct from "@/components/TopratedProduct";
import Newsletter from "@/components/Newsletter";
import SpecialProducts from "@/components/SpecialProducts";
import TopProduct from "@/components/TopProduct";
import TestimonialSlider from "@/components/TestimonialSlider";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <InfoList />
      <TopratedProduct />
      <Banners />
      <SpecialProducts />
      <TopProduct />
      <TestimonialSlider />
      <Blog />
      <Newsletter />
    </Layout>
  );
}
