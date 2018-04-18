import React from "react";
import { render } from "react-dom";
import Applic from "./ColorAdder/Applic";
import MemberList from "./Promise/MemberList";
import Clock from "./Clock/Clock";
import StarRatingFunc from "./Star/StarRatingFunc";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Applic />
  </div>
);

render(<App />, document.getElementById("root"));
