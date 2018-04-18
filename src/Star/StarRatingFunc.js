import React from "react";
import Star from "./Star";

const StarRatingFunc = ({ selected = 2, total = 5, func, id }) => {
  return [...Array(total)].map((item, index) => (
    <Star
      key={index}
      selected={index < selected}
      onClick={i => func(id, index + 1)}
    />
  ));
};

export default StarRatingFunc;
