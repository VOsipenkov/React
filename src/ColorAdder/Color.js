import React from "react";

export class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, title, doRemove } = this.props;
    return (
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
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Color;
