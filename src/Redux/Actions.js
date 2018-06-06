import React from "react";
import * as C from "./Constants";
import { v4 } from "uuid";

export const addColor = (color, title) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title: title,
  color: color,
  rating: 5,
  timestamp: new Date().toString()
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id: id,
  rating: rating
});
