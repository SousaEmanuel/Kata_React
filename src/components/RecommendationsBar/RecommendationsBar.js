import React from "react";
import VideoThumbnail from "../VideoThumbnail";
import { MARIA_LEAL_PLAYLIST } from "../../assets/mariaLealPlaylist";

import "./RecommendationsBar.css";

const RecommendationsBar = (props) => {
  const videoSuggestions = Object.keys(MARIA_LEAL_PLAYLIST).map((videoId) => (
    <VideoThumbnail
      key={videoId}
      videoId={videoId}
      name={MARIA_LEAL_PLAYLIST[videoId].name}
      views={MARIA_LEAL_PLAYLIST[videoId].views}
      onClick={() => props.onRecommendationClick(videoId)}
    />
  ));

  return (
    <div className="recommendations-list">
      <p style={{ "font-weight": "bold" }}>Recommended Maria Leal</p>
      {videoSuggestions}
    </div>
  );
};

export default RecommendationsBar;
