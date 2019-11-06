import React from "react";

class RubySlot extends React.Component {
  render() {
    return (
      <div>
        <div id="rubySlot">
          <img src="./tiles/greenRupi.png" alt="ruby sprite" />
          <p>
            x <span>{this.props.rubyCounter}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RubySlot;
