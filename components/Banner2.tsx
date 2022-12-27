import bannerContent from "@/json/banner.json";
import BannerInfoCard from "@/components/BannerInfoCard";

export default function Banner2() {
  return (
    <div className="flex flex-col lg:flex-row space-x-0 space-y-4 mx-4 lg:space-x-6">
      <BannerInfoCard content={bannerContent.banner3} />
      <BannerInfoCard content={bannerContent.banner4} />
    </div>
  );
}
