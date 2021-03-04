import React from "react";
import "./body.css";
import Profile from "./Profile";
import Stream from "./Stream";
function Body() {
  return (
    <div className="body">
      <div className="body--left">
        <Stream />
        <Profile />
      </div>
      <div className="body_rightPlaceHolder"></div>
    </div>
  );
}

export default Body;
