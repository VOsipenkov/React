import React from "react";
import { Component } from "react";
import { getCurrentTime } from "./getCurrentTime";

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

  close(e) {
    clearInterval(this.ticking);
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
