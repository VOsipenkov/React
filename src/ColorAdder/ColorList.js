import React from "react";
import PropTypes from "prop-types";
import Color from "./Color";
import StarRatingFunc from "../Star/StarRatingFunc";
import * as C from "../Redux/Constants";
import * as actions from "../Redux/Actions";

const ColorList = (props, { store }) => {
  const { colorsReducer } = store.getState();
  const colors = colorsReducer;

  const starClick = (id, rating) => {
    store.dispatch(actions.rateColor(id, rating));
  };

  const remove = id => {
    store.dispatch({
      type: C.REMOVE_COLOR,
      id: id
    });
  };

  return colors.map((item, index) => (
    <div>
      <Color
        {...item}
        doRemove={() => remove(item.id)}
        func={starClick}
        id={item.id}
        selected={item.rating}
      />
    </div>
  ));
};

ColorList.contextTypes = {
  store: PropTypes.object.isRequired
};

export default ColorList;
