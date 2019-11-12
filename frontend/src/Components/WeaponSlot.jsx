import React from "react";

class WeaponSlot extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="weaponSlot">
        <div>
          <p>E</p>
          <p>W</p>
          <p>C</p>
        </div>
        <div>
          <div
            style={{
              backgroundImage: this.props.haveSword
                ? 'url("/items/normalSword.png")'
                : ""
            }}
          ></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default WeaponSlot;
