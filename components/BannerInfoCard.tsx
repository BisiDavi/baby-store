import Image from "next/image";
import Button from "@/components/Button";

interface Props {
  content: {
    title: string;
    text: string;
    img: string;
  };
}

export default function BannerInfoCard({ content }: Props) {
  return (
    <div className="round-md">
      <div className="content">
        <h3>{content.title}</h3>
        <p>{content.text}</p>
        <Button text="Shop Now" className="bg-white h-16 w-24 " />
      </div>
      <Image src={content.img} alt={content.title} />
    </div>
  );
}
