import bannerContent from "@/json/banner.json";
import BannerInfoCard from "@/components/BannerInfoCard";

export default function Banner2() {
  return (
    <div className="flex flex-col lg:items-center lg:flex-row space-x-6 mx-4 lg:mx-0 ">
      <BannerInfoCard content={bannerContent.banner3} />
      <BannerInfoCard content={bannerContent.banner4} />
    </div>
  );
}
