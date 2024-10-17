import { greyStar, yellowStar } from "../assets/img";

export const StarRating = ({ rating }: { rating: number }) => {
  const maxStars = 5;

  return (
    <div className="flex items-center gap-[8px]">
      {Array.from({ length: maxStars }, (v, i) => (
        <img
          key={i}
          src={i < rating ? yellowStar : greyStar}
          alt={`${i < rating ? "Yellow" : "Grey"} Star`}
          className="h-[16px] w-[16px]"
        />
      ))}
    </div>
  );
};
