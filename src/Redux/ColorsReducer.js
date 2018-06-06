import React from "react";
import * as C from "./Constants";
import { color } from "./ColorReducer";

export const colorsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return [...state, color({}, action)];
    case C.RATE_COLOR:
      return state.map(item => color(item, action));
    case C.REMOVE_COLOR:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
