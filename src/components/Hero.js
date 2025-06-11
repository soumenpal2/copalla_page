import React from 'react';
import './Hero.css';
import heroVideo from '../assets/hero-video.mp4';

function Hero() {
  return (
    <div className="hero">
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="../assets/fallback.jpg"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <p>NOW SHOWING IT'S</p>
        <h2>COPPOLA</h2>        
      </div>
    </div>
  );
}

export default Hero;
