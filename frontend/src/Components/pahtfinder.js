import { tilesMap } from "./tilesMap";

function pathFinding(xNPC, yNPC, x, y) {
  var easystarjs = require("easystarjs");

  const grid = tilesMap.map(row =>
    row.map(tile => {
      return tile.includes("Z") ? (tile = 1) : (tile = 0);
    })
  );

  var easystar = new easystarjs.js();
  easystar.setGrid(grid);
  easystar.setIterationsPerCalculation(1000);
  easystar.setAcceptableTiles([0]);
  easystar.findPath(xNPC, yNPC, x, y, function(path) {
    if (path === null) {
      console.log("Path was not found.");
    } else {
      console.log(
        "Path was found. The first Point is " + path[0].x + " " + path[0].y
      );
    }
  });
}

export default pathFinding;
