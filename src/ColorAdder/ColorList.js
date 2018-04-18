import React from "react";
import Color from "./Color";
import StarRatingFunc from "../Star/StarRatingFunc";

const ColorList = ({ colors, doRemove, func }) => {
  return colors.map((item, index) => (
    <div>
      <Color
        {...item}
        doRemove={() => doRemove(item.id)}
        func={func}
        id={item.id}
        selected={item.rating}
      />
    </div>
  ));
};

export default ColorList;
