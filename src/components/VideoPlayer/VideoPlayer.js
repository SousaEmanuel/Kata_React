import React from "react";

import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <div className="embed-container">
      <iframe
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${props.id}?autoplay=0`}
      />
    </div>
  );
};

export default VideoPlayer;
