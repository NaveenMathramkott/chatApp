import React from "react";
import file from "../assets/file.png";
import pres from "../assets/prescription.png";
import folder from "../assets/folder.png";
import camera from "../assets/camera.png";

const PopupMenu = () => {
  return (
    <div className="popup-menu">
      <div className="popup-link">
        <img src={camera} alt={camera} />
        <span>Camera</span>
      </div>
      <div className="popup-link">
        <img src={pres} alt={file} />
        <span>Priscript</span>
      </div>
      <div className="popup-link">
        <img src={file} alt={folder} />
        <span>Report</span>
      </div>

      <div className="popup-link">
        <img src={folder} alt={file} />
        <span>Gallery</span>
      </div>
    </div>
  );
};

export default PopupMenu;
