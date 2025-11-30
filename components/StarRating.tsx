"use client";

import { useState } from "react";
import { Star } from "lucide-react"; // lucide-reactを使用（軽量でTailwindと相性◎）

type StarRatingProps = {
  max?: number;
  onChange?: (rating: number) => void;
};

export default function StarRating({ max = 5, onChange }: StarRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    onChange?.(index);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: max }).map((_, i) => {
        const index = i + 1;
        const isFilled = index <= (hover || rating);

        return (
          <button
            key={index}
            type="button"
            className="focus:outline-none"
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              className={`w-8 h-8 transition-colors ${
                isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
