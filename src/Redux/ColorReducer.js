import React from "react";
import * as c from "./Constants";

export const color = (state = {}, action = {}) => {
  switch (action.type) {
    case c.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        rating: action.rating
      };
    case c.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating
          };
    default:
      return state;
  }
};
