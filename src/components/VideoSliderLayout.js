import React, { useEffect, useRef } from "react";
import "./VideoSliderLayout.css";

const videos = [
  "/videos/video-1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video-4.mp4"
];

const VideoSliderLayout = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const cardWidth = 350 + 20; 
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft + cardWidth >= maxScrollLeft) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-layout-container">
      <div className="video-layout-overlay">
        <div className="video-layout-left">
          <h1 className="video-title"><span style={{ fontSize: '18px' }}>SELECTION OF</span><br /> DIVERSE MESMERIZING <span style={{color:'pink'}}>HOVER</span> TYPES</h1>
          <button className="video-button">Explore More</button>
        </div>

        <div className="video-layout-right" ref={sliderRef}>
          {videos.map((src, index) => (
            <div className="video-card" key={index}>
              <video
                src={src}
                muted
                autoPlay
                loop
                playsInline
                className="slider-video"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSliderLayout;
