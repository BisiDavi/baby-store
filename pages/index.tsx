import Layout from "@/layout";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import Banners from "@/components/Banners";
import TopratedProduct from "@/components/TopratedProduct";
import SpecialProducts from "@/components/SpecialProducts";
import TopCategories from "@/components/TopCategories";
import TestimonialSlider from "@/components/TestimonialSlider";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <Layout title="Welcome, buy phones, laptops, furniture, suglasses, automotive, motorcycle, clothes at a discounted price">
      <Slider />
      <InfoList />
      <TopratedProduct />
      <Banners />
      <SpecialProducts />
      <TopCategories />
      <TestimonialSlider />
      <Blog />
    </Layout>
  );
}
