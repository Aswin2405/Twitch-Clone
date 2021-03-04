import React from "react";
import "./channel.css";
function Channel({ avatar, name, followers }) {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="" />
        <p>{name}</p>
      </div>
      <p>{followers}</p>
    </div>
  );
}

export default Channel;
