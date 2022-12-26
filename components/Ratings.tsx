import Star from "@/public/icon/Star";

interface Props {
  ratings: number;
}

export default function Ratings({ ratings }: Props) {
  const ratingRemainder = ratings % 1;
  const ratingValue = Math.floor(ratings);
  const unfilledStars = 5 - Number(ratingValue);
  const numberOfunfilledStars =
    ratingRemainder > 0 ? unfilledStars - 1 : unfilledStars;
  const filledStarsArray = new Array(ratingValue).fill(0);
  const unfilledStarsArray = new Array(numberOfunfilledStars).fill(0);

  return (
    <div className="star-group mx-auto justify-center mt-3 flex items-center">
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
