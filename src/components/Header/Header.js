import React from "react";
import "./Header.css";
import youtubePlayButton from "../../assets/youtubePlayButton.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={youtubePlayButton} height={"20px"} alt="youtube-logo" />
        <p className="youtube-caption">MariaLealTube</p>
      </div>
      <hr className="solid header-divider" />
    </>
  );
};

export default Header;
