import Layout from "@/layout";
import Slider from "@/components/Slider";
import InfoList from "@/components/InfoList";
import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <InfoList />
      <Banner1 />
      <Banner2 />
    </Layout>
  );
}
