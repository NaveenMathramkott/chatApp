import React from "react";
import introImg from "../assets/medical.jpg";

const Loader = () => {
  return (
    <div className="welcome">
      <img src={introImg} alt={introImg} />
      <h2>Welcome to HelpNow</h2>
    </div>
  );
};

export default Loader;
