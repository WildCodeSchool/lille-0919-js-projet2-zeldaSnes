import React from "react";

class HealthBar extends React.Component {
  constructor(props) {
    super(props);
  }

  generateHeartsTab() {
    let heartsTab = [];
    let numOfHearts = this.props.HP / 2;
    let maxHeartsTabLength = 4;

    for (let i = 1; i <= numOfHearts; i++) {
      heartsTab.push("fullHeart");
    }
    if (numOfHearts % 1 === 0.5) {
      heartsTab.push("halfHeart");
    }
    while (heartsTab.length < maxHeartsTabLength) {
      heartsTab.push("emptyHeart");
    }
    return heartsTab;
  }

  render() {
    return (
      <div id="healthBar">
        {this.generateHeartsTab().map(heart => {
          return <img src={`/tiles/${heart}.png`} alt="*" />;
        })}
      </div>
    );
  }
}

export default HealthBar;
