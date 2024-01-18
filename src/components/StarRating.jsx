import React, { useId, useState } from "react";

export const StarRating = ({ star }) => {
  if (star > 0) {
    const [value] = useState((star % 1) + Math.floor(star / 2));
    const id = useId();

    const ratingArr = [0, 0, 0, 0, 0]
      .fill(0)
      .map((_, index) =>
        value - index < 0.6 && value - index > 0 ? 1 : index < value ? 2 : 0
      );

    return (
      <div className="flex absolute bottom-4 right-4">
        {ratingArr.map((rating, index) =>
          rating === 0 ? (
            <img src="../../public/star.svg" alt="" key={`${id}-${index}`} />
          ) : rating === 1 ? (
            <img
              src="../../public/star-mid.svg"
              alt=""
              key={`${id}-${index}`}
            />
          ) : (
            <img
              src="../../public/star-full.svg"
              alt=""
              key={`${id}-${index}`}
            />
          )
        )}
      </div>
    );
  }
};
