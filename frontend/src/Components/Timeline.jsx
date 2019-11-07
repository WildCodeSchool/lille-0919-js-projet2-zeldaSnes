import React from "react";
import axios from "axios";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zeldaData: null
    };
  }
  excludeList = [
    "3030-53074",
    "3030-49994",
    "3030-44782",
    "3030-37074",
    "3030-17713",
    "3030-14181",
    "3030-22245",
    "3030-22297",
    "3030-8881",
    "3030-35064",
    "3030-17278",
    "3030-37074",
    "3030-51484",
    "3030-72586",
    "3030-14114"
  ];
  componentDidMount() {
    this.getZeldaData();
  }

  getZeldaData() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/";
    axios
      .get(
        url +
          "games/?api_key=c887622ccf98222dd8620e272f451137cbfa298d&format=json&limit=40&filter=name:zelda"
      )
      .then(response => {
        let tabData = response.data.results;
        tabData = tabData.filter(game => {
          return (
            (game.expected_release_year !== null ||
              game.expected_release_month !== null) &&
            !this.excludeList.includes(game.guid)
          );
        });
        tabData.sort(function(a, b) {
          return a.expected_release_year - b.expected_release_year;
        });
        console.log(tabData);
        this.setState({
          zeldaData: tabData
        });
      });
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
