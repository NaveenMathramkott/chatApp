import React from "react";
import doctor from "../assets/doctor.jfif";

export default function Avatar({ user, showName }) {
  return (
    <>
      <div className="avatar-component">
        <img className="avatar" src={user.avatar} alt="" />
        <img className="avatar" src={doctor} alt="" />
        {showName && <h3 className="avatar-title">{user.name}</h3>}
      </div>
    </>
  );
}
