import React from "react";
import "./second-Layout.css";

const Layout = () => {
  return (
    <div className="container">
      {/* Left Side */}
      <div className="left-side">
        <p>Movie Presentation</p>
        <h2 className="title">A wide variety of portfolios</h2>
        <button className="rectangle-button">Click Me</button>
        <img src="/images/left-image.jpg" alt="Left" className="left-image" />
      </div>

      {/* Right Side */}
      <div className="right-side">
        <div className="image-wrapper">
         <img src="/images/right-small.jpg" alt="Small" className="small-image" />
          <img src="/images/right-big.jpg" alt="Big" className="big-image" />
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
