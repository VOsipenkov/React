import React from "react";
import { EventEmitter } from "events";

export default class CountdownStore extends EventEmitter {
  constructor(dispatcher, count = 5) {
    super();
    this.count = count;
    this.dispatcherIndex = dispatcher.register(this.dispatch.bind(this));
  }

  get count() {
    return this.count;
  }

  dispatch(payload) {
    const { count, type } = payload.action;
    switch (type) {
      case "TICK":
        this.count = count - 1;
        this.emit("TICK", this.count);
        return true;
      case "RESET":
        this.count = count;
        this.emit("RESET", this.count);
        return true;
    }
  }
}
