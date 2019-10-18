import React from "react";

function Music({ canMusic }) {
  return (
    <div>
      <audio autoPlay muted={canMusic} loop src="mainMusic.mp3"></audio>
    </div>
  );
}

export default Music;
