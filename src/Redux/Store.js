import { createStore, combineReducers } from "redux";
import { colorsReducer } from "./ColorsReducer";
import { sortColorsReducer } from "./SortColorsReducer";
import { color } from "./ColorReducer";
import { v4 } from "uuid";
import { addColor, rateColor } from "./Actions";
import * as C from "./Constants";
import { storeFactory } from "./StoreFactory";

export const initialState = {
  colorsReducer: [
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
      title: "Crazy Green",
      color: "#00FF00",
      rating: 0,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
  ],
  sortColorsReducer: C.SORTED_BY_TITLE
};
const defaultId = "3315e1p5-3abl-0p523-30e4-8001l8yf4457";

// export const doProcess = () => {
//   console.groupCollapsed("total", "line1");
//   console.log("message1", "line2", "addition");
//   console.log("message2", "line3");
//   console.groupEnd();
//   const store = createStore(
//     combineReducers(
//       { sortColorsReducer, colorsReducer },
//       localStorage["redux-store"] ? localStorage["redux-store"] : {}
//     )
//   );

//   store.subscribe(
//     () => (localStorage["redux-store"] = JSON.stringify(store.getState()))
//   );

//   store.dispatch(addColor("#FFF001", "gey blue"));

//   console.log(JSON.parse(localStorage["redux-store"]));
// };
