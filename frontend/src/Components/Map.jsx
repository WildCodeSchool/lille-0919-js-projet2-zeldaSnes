import React from "react";

import { tileNames, tilesMap } from "./tilesMap.js";
import "./Map.css";

class Map extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  randomGrass() {
    const highGrassPercentage = 9;
    const flowersPercentage = 3;
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= highGrassPercentage && randomNum > flowersPercentage) {
      return "highGrass";
    }
    if (randomNum <= flowersPercentage) {
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
