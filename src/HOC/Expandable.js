import React from "react";

export const Expandable = ComposedComponent =>
  class Expandable extends React.Component {
    constructor(props) {
      super(props);
      const collapsed =
        props.collapsed && props.collapsed === true ? true : false;
      this.state = { collapsed };
      this.expandCollaps = this.expandCollaps.bind(this);
    }

    expandCollaps() {
      let collapsed = !this.state.collapsed;
      this.setState({ collapsed });
      console.log(collapsed);
    }

    render() {
      const { message } = this.props;
      console.log(this.state.collapsed);
      return (
        <ComposedComponent
          {...this.state}
          {...this.props}
          expandCollaps={this.expandCollaps}
        >
          {message}
        </ComposedComponent>
      );
    }
  };
