import React from "react";
// import "./appDownload.css";
import "./appDownload.css";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="appDownload" id="appDownload">
      <p>Download our app for the best experience!</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="playstore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
}

export default AppDownload;
