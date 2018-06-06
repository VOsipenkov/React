export const ADD_COLOR = "ADD_COLORR";
export const RATE_COLOR = "RATE_COLOR";
export const REMOVE_COLOR = "REMOVE_COLOR";
export const SORT_COLORS = "SORT_COLORS";
export const SORTED_BY_DATE = "SORTED_BY_DATE";
export const SORTED_BY_NAME = "SORTED_BY_NAME";
export const SORTED_BY_TITLE = "SORTED_BY_TITLE";

export const action1 = {
  type: ADD_COLOR,
  id: "123",
  title: "red",
  color: "#111FFF",
  rating: 5
};

export const actionChangeRate = {
  type: RATE_COLOR,
  id: "5555",
  rating: 1
};

export const defaultState = [
  {
    id: "5555",
    title: "green",
    color: "#CCCFFF",
    rating: 5
  }
];
