import React from "react";
import "./NewBlackLayout.css";

const NewBlackLayout = () => {
  return (
    <div className="black-layout-container">
      {/* Left Side */}
      <div className="black-layout-left">
        <p> BLOG</p>
        <div className="black-layout-content">
          <h2 className="black-layout-title">SHARE YOUR MOVIE STORIES.COPPOLA IS GREAT FOT BLOGGING</h2>
          <button className="black-layout-button">Explore</button>
          <img
            src="images/left-image-black.jpg"
            alt="Left"
            className="black-layout-left-image"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="black-layout-right">
        <div className="black-layout-image-wrapper">
          <img
            src="images/right-image-black-big.jpg"
            alt="Big"
            className="black-layout-big-image"
          />
          <img
            src="images/right-image-black-small.jpg"
            alt="Small"
            className="black-layout-small-image"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBlackLayout;
