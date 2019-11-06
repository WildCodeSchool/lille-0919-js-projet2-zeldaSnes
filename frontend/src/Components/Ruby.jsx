import React from "react";
import "./Ruby.css";

class Ruby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32
    };
  }

  render() {
    return (
      <div>
        <div
          className={this.props.rubyClass}
          style={{
            top: `${this.props.yRuby * this.state.assetHeight}px`,
            left: `${this.props.xRuby * this.state.assetWidth}px`
          }}
        ></div>
      </div>
    );
  }
}
export default Ruby;
