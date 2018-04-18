import React from "react";
import Star from "./Star";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2,
      total: 5
    };

    this.change = this.change.bind(this);
  }

  change(selected) {
    this.setState({ selected });
  }

  render() {
    const { selected, total } = this.state;
    return (
      <div>
        {[...Array(total)].map((item, index) => (
          <Star
            key={index}
            selected={index < selected}
            onClick={e => this.change(index + 1)}
          />
        ))}
      </div>
    );
  }
}

export default StarRating;
