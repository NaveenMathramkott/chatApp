import React from "react";
import img from "../assets/symbol.png";
import doc from "../assets/doc.png";
import clock from "../assets/clock.png";
import chat from "../assets/chat.png";
import Popup from "reactjs-popup";

import Search from "./Search";

const Navbar = ({ search, setSearch }) => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={img} className="webLogo" alt="" />
          <span>Doctor e-clinics</span>
        </div>
        <div className="nav-link">
          <Popup
            trigger={
              <div className="nav-option">
                <img src={doc} alt={doc} className="doclogo"  />
                <span>Find Doctor</span>
              </div>
            }
            position="left center"
          >
            <Search search={search} setSearch={setSearch} />
          </Popup>
          <div className="nav-option">
            <img src={clock} alt={clock} className="doclogo" />
            <span>Appoinments</span>
          </div>
          <div className="nav-option">
            <img src={chat} alt={chat} className="doclogo" />
            <span>Chat with Doctor</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
