import React from "react";
import "./VideoSection.css";
import PlanetVideo from "../../assets/video.mp4";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container">
        <figure>
          <video controls autoPlay loop muted>
            <source src={PlanetVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      </div>
      <div className="video-content">
        <h2>
          How Planetary Data Helps Us
          <br />
          Understand Space
        </h2>
        <p>
          Planetary science goes beyond images. Comparing <span>mass</span>,{" "}
          <span>diameter</span> <span>gravity</span> and{" "}
          <span>density</span>, we gain insight into how planets form, behave,
          and interact within the solar system.
        </p>
      </div>
    </section>
  );
}
