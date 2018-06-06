import React from "react";
import ColorList from "./ColorList";
import { connect } from "react-redux";
import * as C from "../Redux/Constants";

const mapStateToProps = state => {
  return {
    colors: state.colorsReducer
  };
};

const mapDispatchToProps = dispatch => ({
  starClick(id, rating) {
    dispatch({
      type: C.RATE_COLOR,
      id: id,
      rating: rating
    });
  },

  remove(id) {
    dispatch({
      type: C.REMOVE_COLOR,
      id: id
    });
  }
});

export const Colors = connect(mapStateToProps, mapDispatchToProps)(ColorList);
