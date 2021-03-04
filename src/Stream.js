import React from "react";
import "./stream.css";
function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__StatusIndicator">Online</div>
              <h2>Check Out the below streams</h2>
            </div>
            <div className="stream__statusInfo">
              <i class="fas fa-bell"></i>
              <p>You will be notified when it is live</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            width="700"
            height="336"
            src="https://www.youtube.com/embed/bmVKaAV_7-A"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stream;
