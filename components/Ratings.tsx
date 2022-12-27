import Star from "@/public/icon/Star";

interface Props {
  ratings: number;
  className?: string;
}

export default function Ratings({ ratings, className="mx-auto justify-center" }: Props) {
  const ratingRemainder = ratings % 1;
  const ratingValue = Math.floor(ratings);
  const unfilledStars = 5 - Number(ratingValue);
  const numberOfunfilledStars =
    ratingRemainder > 0 ? unfilledStars - 1 : unfilledStars;
  const filledStarsArray = new Array(ratingValue).fill(0);
  const unfilledStarsArray = new Array(numberOfunfilledStars).fill(0);

  return (
    <div
      className={`star-group ${className} mt-3 flex items-center`}
    >
      {filledStarsArray.map((_, index) => (
        <Star key={index} fill="#f1e803" />
      ))}
      {/* {ratingRemainder > 0 && <BsStarHalf size="20px" color="orange" />} */}
      {unfilledStarsArray.map((_, index) => (
        <Star key={index} fill="gray" />
      ))}
    </div>
  );
}
