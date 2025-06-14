import React from 'react';
import './about.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-col logo-col">
          <h2 className="footer-logo">Coppola</h2>
          <p>Creative Agency</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* White Line */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-col">
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <div className="footer-bottom-col">
          <h4>Stay Connected</h4>
        </div>

        <div className="footer-bottom-col">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>

      <hr className="footer-divider" />
    </footer>
  );
};

export default Footer;
