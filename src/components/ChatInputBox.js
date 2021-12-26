import React from "react";
import attachIcon from "../assets/attach.png";
import sendIcon from "../assets/send.png";
import Popup from "reactjs-popup";
import PopupMenu from "./PopupMenu";

export default function ChatInputBox({ message, setMessage, pushMessage }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && message) {
      pushMessage();
    }
  }
  return (
    <div className="chat-input-box">
      <div className="chat-input">
        <input
          type="text"
          placeholder="type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Popup
        trigger={
          <div className="icon send">
            <img src={attachIcon} alt={attachIcon} className="inputIcon" />
          </div>
        }
        position="top center"
      >
        <PopupMenu />
      </Popup>

      <div className="icon send" onClick={pushMessage}>
        <img src={sendIcon} alt={sendIcon} className="inputIcon" />
      </div>
    </div>
  );
}
