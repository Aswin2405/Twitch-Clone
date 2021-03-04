import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar } from "@material-ui/core";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://iconape.com/wp-content/png_logo_vector/live-logo.png"
          alt=""
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        {/* <MoreHorizIcon /> */}
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="header__center">
        <input placeholder="Search" />
        <div className="header__centerLogoContainer">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightContainer">
          <i class="fas fa-crown"></i>
          <i class="fas fa-inbox"></i>
          <i class="fas fa-comment-alt"></i>
          <div className="header__rightBits">
            <i class="fas fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
