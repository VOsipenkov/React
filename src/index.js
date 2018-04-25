import React from "react";
import { render } from "react-dom";
import Applic from "./ColorAdder/Applic";
import MemberList from "./Promise/MemberList";
import Clock from "./Clock/Clock";
import StarRatingFunc from "./Star/StarRatingFunc";
import HiddenMessages from "./HiddenMessages/HiddenMessages";
import { Display, WhenTruthy, WhenForbidden } from "./Display/Display";
import CountryList from "./DifferentLibs/CountryList";
import { People } from "./HOC/People";
import DataComponent from "./HOC/DataComponent";
import { Countries } from "./HOC/Countries";
import { Expandable } from "./HOC/Expandable";
import { ShowHideMessage } from "./HiddenMessages/ShowHideMessage";
import { MenuButton } from "./HOC/MenuButton";

// import { countDown, countDownActions } from "./Flux/CountDown";
import { CountDownDispatcher } from "./Flux/CountDownDispatcher";
// import CountdownStore from "/Flux/CountdownStore";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const age = 20;
const RandomUsers = DataComponent(People, "https://api.randomuser.me/");
const CountriesList = DataComponent(
  Countries,
  "https://restcountries.eu/rest/v1/all"
);
const CollapseMessage = Expandable(ShowHideMessage);
const ExpandByButton = Expandable(MenuButton);

const App = count => <div style={styles} />;

render(<App />, document.getElementById("root"));
