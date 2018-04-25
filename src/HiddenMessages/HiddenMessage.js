import React from "react";

class HiddenMessage extends React.Component {
  constructor(props) {
    super(props);

    const { hide } = this.props;
    this.state = {
      hide: hide ? hide : true
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const hide = nextProps.hide;
    this.setState({ hide });
  }

  show() {
    this.setState({ hide: false });
  }

  hide() {
    this.setState({ hide: true });
  }

  render() {
    let { children } = this.props;
    let { hide } = this.state;

    return (
      <p onMouseEnter={this.show} onMouseLeave={this.hide}>
        {hide ? children.replace(/[a-zA-z1-9]/g, "x") : children}
      </p>
    );
  }
}

export default HiddenMessage;
