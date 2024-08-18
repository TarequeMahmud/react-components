import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index) => setRating(index);
  const hadleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={40}
            style={
              index <= (rating || hover)
                ? { color: "#fff700" }
                : { color: " #000000" }
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => hadleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
