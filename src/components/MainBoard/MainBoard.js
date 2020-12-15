import React, { useState } from "react";
import RecommendationsBar from "../RecommendationsBar/RecommendationsBar";
import VideoPlayer from "../VideoPlayer";
import { MARIA_LEAL_PLAYLIST } from "../../assets/mariaLealPlaylist";

import "./MainBoard.css";

const MainBoard = () => {
  const [currVideoId] = useState(Object.keys(MARIA_LEAL_PLAYLIST)[0]);

  return (
    <div className="main-board">
      <div className="video-player-container">
        <VideoPlayer id={currVideoId} />
      </div>
      <div className="recommendations-bar-container">
        <RecommendationsBar />
      </div>
    </div>
  );
};

export default MainBoard;
