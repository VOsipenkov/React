import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
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

import Countdown from "./Flux/CountDown";
import countDownActions from "./Flux/CountDownActions";
import CountDownDispatcher from "./Flux/CountDownDispatcher";
import CountdownStore from "./Flux/CountdownStore";
import * as C from "./Redux/Constants";
import storeFactory from "./Redux/StoreFactory";
import { Products, Events, About, Whoops404, MainMenu } from "./Components";

const defaultState = {
  colorsReducer: [
    {
      id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
      title: "ocean at dusk",
      color: "#00c4e2",
      rating: 5
    },
    {
      id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
      title: "lawn",
      color: "#26ac56",
      rating: 3
    },
    {
      id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
      title: "bright red",
      color: "#ff0000",
      rating: 0
    }
  ],
  sortColorsReducer: C.SORTED_BY_DATE
};

ReactDOM.render(
  withRouter(
    <HashRouter>
      <div className="main">
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/products" component={Products} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>
  ),
  document.getElementById("root")
);
