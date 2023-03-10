import BannerInfoCard from "@/components/BannerInfoCard";

interface Props {
  content: Array<{
    title: string;
    text: string;
    img: string;
    className: string;
  }>;
}

export default function Banner({ content }: Props) {
  return (
    <div className="container mx-auto my-4 flex flex-col lg:items-center lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 px-4 lg:mt-4 lg:mb-0">
      {content.map((item) => (
        <BannerInfoCard key={item.title} content={item} />
      ))}
    </div>
  );
}
