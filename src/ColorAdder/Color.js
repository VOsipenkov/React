import React from "react";
import StarRatingFunc from "../Star/StarRatingFunc";

export class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.style = { backgroundColor: "#CCC" };
  }

  componentWillUpdate(nextProps) {
    const { rating, title } = this.props;
    const nextRating = this.props.rating;

    this.refs._title.style.backgroundColor = "red";
    this.refs._title.style.color = "white";
  }

  componentDidUpdate(prevProps) {
    this.refs._title.style.backgroundColor = "";
    this.refs._title.style.color = "black";
    console.log("componentDidUpdate");

    const { rating, title } = prevProps;
    if (this.props.rating > rating) {
      console.log(`${this.props.title} became better`);
    } else if (this.props.rating < rating) {
      console.log(`${this.props.title} became worse`);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }

  render() {
    const { color, title, doRemove, rating, id, func } = this.props;
    return (
      <p>
        <div>
          <div className="color" style={this.style}>
            <div>
              <div ref="_title">
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
