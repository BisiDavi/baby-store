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
    <>
      <div
        className={`bannerInfoCard p-6 lg:p-8 relative ${content.className} lg:h-80 rounded-xl`}
      >
        <div className="content">
          <h3 className="text-xl font-bold">{content.title}</h3>
          <p className="mt-1">{content.text}</p>
          <Button
            text="Shop Now"
            className="bg-white h-10 mt-5 lg:mt-10 rounded-lg w-32 hover:bg-gray-100"
          />
        </div>
      </div>
      <style jsx>
        {`
          .bannerInfoCard {
            background-image: url(${content.img});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 350px;
          }
          .bannerInfoCard:hover {
            transform: scale(1);
            transition: transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          @media (max-width: 768px) {
            .bannerInfoCard {
              height: unset;
            }
          }
        `}
      </style>
    </>
  );
}
