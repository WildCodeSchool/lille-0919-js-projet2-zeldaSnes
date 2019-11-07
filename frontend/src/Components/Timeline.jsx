import React from "react";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zeldaData: null
    };
  }

  render() {
    return (
      <div className="Timeline">
        <h1>Zelda games Timeline</h1>
      </div>
    );
  }
}

export default TimeLine;
