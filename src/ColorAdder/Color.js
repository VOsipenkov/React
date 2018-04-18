import React from "react";
import StarRatingFunc from "../Star/StarRatingFunc";

export class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.style = { backgroundColor: "#CCC" };
  }

  componentWillUpdate() {
    this.style = null;
  }

  shoultComponentUpdate(nextProps) {
    const { rating } = this.props;
    rating !== nextProps.rating;
  }

  render() {
    const { color, title, doRemove, rating, id, func } = this.props;
    return (
      <p>
        <div>
          <div className="color" style={this.style}>
            <div>
              <div>
                {title}
                <button onClick={doRemove} className="remove">
                  x
                </button>
              </div>
              <div
                style={{
                  backgroundColor: color,
                  width: "100%",
                  align: "center",
                  height: 40
                }}
              >
                <StarRatingFunc selected={rating} func={func} id={id} />
              </div>
            </div>
          </div>
        </div>
      </p>
    );
  }
}
export default Color;
