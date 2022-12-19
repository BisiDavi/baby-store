import Image from "next/image";
import Button from "@/components/Button";

interface Props {
  content: {
    title: string;
    text: string;
    img: string;
    className: string;
  };
}

export default function BannerInfoCard({ content }: Props) {
  return (
    <div className={`mr-4 ${content.className}`}>
      <div className="content">
        <h3>{content.title}</h3>
        <p>{content.text}</p>
        <Button text="Shop Now" className="bg-white h-16 w-24 " />
      </div>
      <div
        className="w-full"
        style={{
          height: "40vh",
          position: "relative",
          objectFit: "contain",
        }}
      >
        <Image
          src={content.img}
          className="rounded-xl"
          alt={content.title}
          fill={true}
        />
      </div>
    </div>
  );
}
