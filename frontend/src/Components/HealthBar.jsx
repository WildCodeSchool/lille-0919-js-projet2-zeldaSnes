import React from "react";

let heartsTab = ["fullHeart", "fullHeart", "fullHeart", "halfHeart"];

class HealthBar extends React.Component {
  render() {
    return (
      <div id="healthBar">
        {heartsTab.map(heart => {
          return <img src={`/tiles/${heart}.png`} alt="*" />;
        })}
      </div>
    );
  }
}

export default HealthBar;