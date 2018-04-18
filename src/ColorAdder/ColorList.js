import React from "react";
import Color from "./Color";
import StarRatingFunc from "../Star/StarRatingFunc";

const ColorList = ({ colors, doRemove, func }) => {
  return colors.map((item, index) => (
    <div>
      <Color {...item} doRemove={() => doRemove(item.id)} />
      <StarRatingFunc selected={item.rating} func={func} id={item.id} />
    </div>
  ));
};

export default ColorList;
