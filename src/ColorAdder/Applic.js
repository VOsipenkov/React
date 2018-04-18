import React from "react";
import { Component } from "react";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import { v4 } from "uuid";
import StarRatingFunc from "../Star/StarRatingFunc";

class Applic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          title: "ocean at dusk",
          color: "#00c4e2",
          rating: 5
        },
        {
          id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
          title: "lawn",
          color: "#26ac56",
          rating: 3
        },
        {
          id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
          title: "bright red",
          color: "#ff0000",
          rating: 0
        }
      ]
    };

    this.doAdd = this.doAdd.bind(this);
    this.doRemove = this.doRemove.bind(this);
    this.starClick = this.starClick.bind(this);
  }

  starClick(id, rating) {
    const colors = this.state.colors.map(color => {
      if (color.id === id) {
        color.rating = rating;
      }

      return color;
    });

    console.log(`${id}:${rating}`);
    this.setState({ colors });
  }

  doAdd(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title: title,
        color: color,
        rating: 0
      }
    ];

    console.log(colors);
    this.setState({ colors });
  }

  doRemove(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }

  render() {
    console.log(this.state.colors);

    return (
      <div>
        <AddColorForm func={this.doAdd} />
        <ColorList
          colors={this.state.colors}
          doRemove={this.doRemove}
          func={this.starClick}
        />
      </div>
    );
  }
}

export default Applic;
