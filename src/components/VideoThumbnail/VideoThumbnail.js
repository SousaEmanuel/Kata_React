import React from "react";

import "./VideoThumbnail.css";

const VideoThumbnail = (props) => {
  const thumbnailSrc = `https://img.youtube.com/vi/${props.videoId}/mqdefault.jpg`;

  return (
    <div className="video-thumbnail-container" onClick={props.onClick}>
      <img
        src={thumbnailSrc}
        alt={`${props.videoId}-thumbnail`}
        width="160px"
      />
      <span className="video-description-container">
        <p className="video-thumbnail-name">{props.name}</p>
        <p className="video-thumbnail-view-count">
          {`${Number(props.views).toLocaleString()} views`}
        </p>
      </span>
    </div>
  );
};

export default VideoThumbnail;
