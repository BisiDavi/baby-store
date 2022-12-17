import { Inter } from "@next/font/google";
import Layout from "@/layout";
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Slider />
    </Layout>
  );
}
