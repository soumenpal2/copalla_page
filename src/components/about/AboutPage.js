
import React from 'react';
import Header from './header'; 
import './header.css'; 
import './about.css';   
import VideoCarousel from './VideoCarousel';     
import TwoSectionLayout from './TwoSectionLayout';   
import TestimonialSlider from './TestimonialSlider';
import ScrollingShowcase from './animatedtext';
import LeftTextSection from './LeftTextSection'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

    <div className="black-section">
  <div className="text-container left">
     <p>
					SYNOPSIS</p>
    <h1>
					The telling of two intertwining lives. Mass Destruction</h1>
  </div>
  <div className="text-container right">
    <p>
      Cum sociis Theme natoque penatibus et magnis dis part montes, nascetur ridiculus mus. Aliquam loremante, dapibus in, viverra. Dolor orem Ipsn vuctor aliquet re ipsum dolor sit amet rem Ipsn gravida nibh vel velit auct Curabitur ullamcorper ultricies nisi. Nam eget, etiam mea.
    </p>
  </div>
</div>

<VideoCarousel />
<TwoSectionLayout/>
<TestimonialSlider/>
<ScrollingShowcase/>
<LeftTextSection/>
































    </div>
  );
};

export default AboutPage;
