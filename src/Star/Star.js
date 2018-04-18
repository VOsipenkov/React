import React from "react";
import Component from "react";
import { withStyles } from "material-ui-next/styles";

const style = {
  star: {
    cursor: "pointer",
    height: "25px",
    width: "25px",
    margin: "2px",
    float: "left",
    backgroundColor: "grey",
    clipPath: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);`
  },
  selected: {
    backgroundColor: "red",
    cursor: "pointer",
    height: "25px",
    width: "25px",
    margin: "2px",
    float: "left",
    clipPath: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);`
  }
};

const Star = ({ selected = false, classes, onClick }) => {
  return (
    <div
      className={selected ? classes.selected : classes.star}
      onClick={onClick}
    />
  );
};

export default withStyles(style)(Star);
