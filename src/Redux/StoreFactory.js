import { createStore, combineReducers, applyMiddleware } from "redux";
import { sortColorsReducer } from "./SortColorsReducer";
import { colorsReducer } from "./ColorsReducer";
import { initialState } from "./Store";

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = {}) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colorsReducer, sortColorsReducer }),
    initialState
    // ,
    // localStorage["redux-store"]
    //   ? JSON.parse(localStorage["redux-store"])
    //   : initialState
  );
export default storeFactory;
