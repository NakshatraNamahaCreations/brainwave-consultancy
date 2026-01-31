import React from "react";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">

        <div className="videos-box">
          <video
            src="./pictures/VID-20250921-WA0020(1) (1).mp4"
            muted
            controls
            loop
            playsInline
            autoPlay
          />
        </div>

        <div className="videos-box">
          <video
            src="./pictures/VID_20251028_075232 (1).mp4"
            muted
            controls
            loop
            playsInline
            autoPlay
          />
        </div>

      </div>
    </section>
  );
}
