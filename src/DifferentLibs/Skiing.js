import React from "react";
import * as d3 from "d3";
import { withStyles } from "material-ui-next";

const historicDatesForSkiing = [
  {
    year: 1879,
    event: "Ski Manufacturing Begins"
  },
  {
    year: 1882,
    event: "US Ski Club Founded"
  },
  {
    year: 1924,
    event: "First Winter Olympics Held"
  },
  {
    year: 1926,
    event: "First US Ski Shop Opens"
  },
  {
    year: 1932,
    event: "North America's First Rope Tow Spins"
  },
  {
    year: 1936,
    event: "First Chairlift Spins"
  },
  {
    year: 1949,
    event: "Squaw Valley, Mad River Glen Open"
  },
  {
    year: 1964,
    event: "Plastic Buckle Boots Available"
  },
  {
    year: 1958,
    event: "First Gondola Spins"
  }
];

const style = {
  container: {}
};

class Skiing extends React.Component {
  constructor(props) {
    super(props);
    const data = historicDatesForSkiing;

    const times = d3.extent(data.map(el => el.year));
    const range = [50, 450];

    this.state = { data, times, range };
  }

  componentDidMount() {
    let group;
    const { data, times, range } = this.state;
    const { target } = this.refs;
    const scale = d3
      .scaleTime()
      .domain(times)
      .range(range);
    d3
      .select(target)
      .append("svg")
      .attr("height", 200)
      .attr("width", 500);

    group = d3
      .select(target.children[0])
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d, i) => "translate(" + scale(d.year) + ", 0)");

    group.append("circle");
  }

  render() {
    return (
      <div className="timeline">
        <div ref="target" />
      </div>
    );
  }
}

export default withStyles(style)(Skiing);
