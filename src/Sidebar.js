import React from "react";
import Channel from "./Channel";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D"
          name="Aswin"
          followers="816k"
        />
        <Channel
          avatar="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D"
          name="Papa React"
          followers="816k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D"
          name="@_aswin24_"
          followers="16k"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i class="fas fa-search"></i>
          <input placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
