import React from "react";
import { Component } from "react";
import User from "./User";

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      members: []
    };

    this.getFakeMembers = this.getFakeMembers.bind(this);
  }

  getFakeMembers(count) {
    return new Promise((resolves, rejects) => {
      const api = `https://api.randomuser.me/?nat=US&results=${count}`;
      const request = new XMLHttpRequest();
      request.open("GET", api);

      request.onload = () => {
        request.status !== 200
          ? rejects(request.status)
          : resolves(JSON.parse(request.response).results);
      };

      request.onerror = err => resolves(err);
      request.send();
    });
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.getFakeMembers(3).then(
      members => {
        this.setState({ members, loading: false });
      },
      error => this.setState({ error: true })
    );
  }

  render() {
    console.log(this.state.members);
    return this.state.loading
      ? "loading.."
      : this.state.members.map(item => <User {...item} />);
  }
}

export default MemberList;
