import React from 'react';
import './about.css';

const teamMembers = [
  {
    image: '/images/about-image/h1-team1.jpg',
    name: 'Ananya Roy',
    designation: 'Creative Director',
  },
  {
    image: '/images/about-image/h1-team2.jpg',
    name: 'Rahul Sharma',
    designation: 'Lead Designer',
  },
  {
    image: '/images/about-image/h1-team3.jpg',
    name: 'Meera Das',
    designation: 'Marketing Head',
  },
  {
    image: '/images/about-image/h1-team4.jpg',
    name: 'Arjun Patel',
    designation: 'Tech Lead',
  },
];

const ScrollingSection = () => {
  return (
    <div
      className="scrolling-section-wrapper"
      style={{
        backgroundImage: `url('/images/about-image/background4.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0px',
      }}
    >
      {/* Intro Paragraph */}
      <p className="intro-text">
        The Story About
      </p>

      {/* Scrolling Text */}
      <div className="scrolling-text-wrapper">
        <div className="scrolling-text">
          CREATIVITY • STRATEGY • BRANDING • INNOVATION • CREATIVITY • STRATEGY • BRANDING • INNOVATION •
        </div>
      </div>

      {/* Team Cards */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
