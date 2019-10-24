import React from "react";

import { tileNames, tilesMap } from "./tilesMap.js";
import "./Map.css";

class Map extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  randomGrass() {
    //40, 6, 23 and 21 are random numbers with no special meanings used to display tiles randomly
    let randomNum = Math.floor(Math.random() * 40);
    if (randomNum === 6 || randomNum === 23) {
      return "highGrass";
    }
    if (randomNum === 21) {
      return "flowers";
    } else {
      return "grass";
    }
  }

  render() {
    return (
      <div className="map">
        {tilesMap.map(row =>
          row.map(tile => {
            return (
              <div
                style={{
                  background: `url(/tiles/${
                    tile === "v001" ? this.randomGrass() : tileNames[tile]
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
