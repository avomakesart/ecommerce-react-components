import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() =>  setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue  < hover || rating ? "#ffc107" : "#e2e2e2"}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              style={{ transition: 'color 200ms' }}
            />
          </label>
        );
      })}
    </div>
  );
}
