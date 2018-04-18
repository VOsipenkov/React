import React from "react";
import { Component } from "react";
import { getCurrentTime } from "./getCurrentTime";
import { unmountComponentAtNode, render } from "react-dom";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: getCurrentTime() };

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.ticking = setInterval(
      () => this.setState({ currentTime: getCurrentTime() }),
      1000
    );
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.ticking);
  }

  close(e) {
    unmountComponentAtNode(document.getElementById("root"));
  }

  render() {
    return (
      <div>
        {this.state.currentTime}
        <button onClick={this.close}>X</button>
      </div>
    );
  }
}

export default Clock;
