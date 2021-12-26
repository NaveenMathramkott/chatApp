import React from "react";

export default function Message({ message }) {
  return (
    <div className={`message ${message.isMainUser ? "sent" : "received"}`}>
      {message.msg}
      <div className="metadata">
        <span className="date">{message.date.toLocaleString()}</span>
        {message.isMainUser}
      </div>
    </div>
  );
}
