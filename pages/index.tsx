import Layout from "@/layout/.";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import TopratedProduct from "@/components/TopratedProduct";
import SpecialProducts from "@/components/SpecialProducts";
import TopCategories from "@/components/TopCategories";
import TestimonialSlider from "@/components/TestimonialSlider";
import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import bannerContent from "@/json/banner.json";

// homepage 
export default function Home() {
  return (
    <Layout title="Welcome, buy phones, laptops, furniture, suglasses, automotive, motorcycle, clothes at a discounted price">
      <Slider data-testid="homepage-slider" />
      <InfoList />
      <TopratedProduct />
      <Banner content={bannerContent.banner1} />
      <SpecialProducts />
      <Banner content={bannerContent.banner2} />
      <TopCategories />
      <TestimonialSlider />
      <Blog />
    </Layout>
  );
}
