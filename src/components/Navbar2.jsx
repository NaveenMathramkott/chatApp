import React from "react";
import video from "../assets/video.png";
import audio from "../assets/audio.png";

const Navbar2 = () => {
  return (
    <div className="navbar-2">
      <img src={video} alt={video} className="inputlogo" />
      <img src={audio} alt={audio} className="inputlogo" />
    </div>
  );
};

export default Navbar2;
