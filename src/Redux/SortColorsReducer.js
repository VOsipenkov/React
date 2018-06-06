import React from "react";
import * as C from "./Constants";

export const sortColorsReducer = (state = C.SORTED_BY_NAME, action = {}) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return {
        sort: action
      };
    default:
      return state;
  }
};
