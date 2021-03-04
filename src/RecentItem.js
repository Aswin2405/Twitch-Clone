import React from "react";
import "./recentitem.css";
function RecentItem({ url, title }) {
  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img src="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130244819_696690854319053_6198994166554242746_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=ZgMyQaxNfBwAX8zGSOs&tp=1&oh=76174efa4bf06000047b1016eab19071&oe=6060F34D" />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>Aswin</p>
          <p>Papa React</p>
        </div>
      </div>
    </div>
  );
}

export default RecentItem;
