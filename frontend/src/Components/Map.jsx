import React from "react";

import { tileNames, tilesMap, tilesMap2 } from "./tilesMap.js";
import "./Map.css";

class Map extends React.Component {
  shouldComponentUpdate() {
    return this.props.shouldUpdate;
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
        {this.props.mapNumber.map(row =>
          row.map(tile => {
            return (
              <div
                key={[row.Index, tile.Index]}
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
