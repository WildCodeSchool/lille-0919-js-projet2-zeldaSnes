import React from "react";

import { tileNames, tilesMap, tilesMap2 } from "./tilesMap.js";
import "./Map.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return this.props.shouldUpdate;
  }

  randomGrass() {
    let randomNum = Math.floor(Math.random() * 40);
    if (randomNum === 6 || randomNum === 23) {
      return "highGrass";
    } else if (randomNum === 21) {
      return "flowers";
    } else {
      return "grass";
    }
  }

  render() {
    return (
      <div className="map">
        {this.props.mapNumber.map(row =>
          row.map(column => {
            return (
              <div
                style={{
                  background: `url(/tiles/${
                    column === "v001" ? this.randomGrass() : tileNames[column]
                  }.png)`
                }}
              ></div>
            );
          })
        )}
      </div>
    );
  }
}

export default Map;
