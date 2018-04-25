import React from "react";
import fetch from "isomorphic-fetch";

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        loaded: false,
        data: []
      };

      console.log("constructor DataComponent");
    }

    componentWillMount() {
      const { count } = this.props;
      this.setState({ loading: true });
      if (count > 0) {
        url = url + `?nat=US&results=${count}`;
      }
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data, loading: false, loaded: true }));
    }

    render() {
      console.log("render DataComponent");
      return <ComposedComponent {...this.state} />;
    }
  };

export default DataComponent;
