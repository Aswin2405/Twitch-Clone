import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";
function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D"
          alt=""
        />
        <div className="profile__topLeftDetails">
          <h1>Aswin</h1>
          <h3>820K followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i class="fas fa-heart graybg"></i>
        <i class="fas fa-bell graybg"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i class="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/8cm1x4bC610"}
            title={"Java Tutorial"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/_uQrJ0TkZlc"}
            title={"Python Tutorial"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/Ke90Tje7VS0"}
            title={"React Tutorial"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/0-S5a0eXPoc"}
            title={"React Native Tutorial"}
          />
        </div>
        <div className="profile__categories">
          <h2>Recently Streamed Categories</h2>
          <img src="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D" />
          <h3>Papa React</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
<iframe
  width="956"
  height="538"
  src="https://www.youtube.com/embed/_uQrJ0TkZlc"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="956"
  height="538"
  src="https://www.youtube.com/embed/Ke90Tje7VS0"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="956"
  height="538"
  src="https://www.youtube.com/embed/0-S5a0eXPoc"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="956"
  height="538"
  src="https://www.youtube.com/embed/8cm1x4bC610"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
