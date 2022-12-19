import bannerContent from "@/json/banner.json";
import BannerInfoCard from "@/components/BannerInfoCard";

export default function Banner1() {
  return (
    <div className="flex space-x-6">
      <BannerInfoCard content={bannerContent.banner1} />
      <BannerInfoCard content={bannerContent.banner2} />
    </div>
  );
}
