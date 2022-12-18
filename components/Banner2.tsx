import bannerContent from "@/json/banner.json";
import BannerInfoCard from "@/components/BannerInfoCard";

export default function Banner2() {
  return (
    <div className="container mx-auto">
      <BannerInfoCard content={bannerContent.banner3} />
      <BannerInfoCard content={bannerContent.banner4} />
    </div>
  );
}
