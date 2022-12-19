import bannerContent from "@/json/banner.json";
import BannerInfoCard from "@/components/BannerInfoCard";

export default function Banner2() {
  return (
    <div className="flex space-x-6">
      <BannerInfoCard content={bannerContent.banner3} />
      <BannerInfoCard content={bannerContent.banner4} />
    </div>
  );
}
