import React from "react";

class RubySlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="rubySlot">
          <img src="./tiles/greenRupi.png" alt="ruby image" />
          <p>
            x <span>{this.props.rubyCounter}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RubySlot;
