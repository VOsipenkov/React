import React from "react";
import HiddenMessage from "./HiddenMessage";

class HiddenMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "The crow crows after midnight",
        "Bring a watch and dark clothes to the spot",
        "Jericho Jericho Go",
        "and new test message"
      ],
      showing: -1
    };
  }

  componentDidMount() {
    setInterval(() => {
      let { messages, showing } = this.state;
      showing = ++showing >= messages.length ? 0 : showing;
      this.setState({ showing });
    }, 1000);
  }

  render() {
    let { messages, showing } = this.state;

    return (
      <div>
        {messages.map((message, inx) => {
          console.log(inx !== showing);
          return (
            <HiddenMessage hide={inx !== showing}>{message}</HiddenMessage>
          );
        })}
      </div>
    );
  }
}

export default HiddenMessages;
