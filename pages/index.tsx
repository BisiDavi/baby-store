import Layout from "@/layout";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <InfoList />
      <Banners />
    </Layout>
  );
}
