import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Component } from "react";
import AddColorForm from "./AddColorForm";
import { Colors } from "./Colors";
import { v4 } from "uuid";
import StarRatingFunc from "../Star/StarRatingFunc";
import * as C from "../Redux/Constants";

const Applic = (props, { store }) => {
  return (
    <div>
      <AddColorForm />
      <Colors />
    </div>
  );
};

Applic.contextTypes = {
  store: PropTypes.object.isRequired
};

export default Applic;
