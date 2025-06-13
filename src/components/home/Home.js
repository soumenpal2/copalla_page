// components/home/Home.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import VideoGrid from './VideoGrid';
import Layout from './second-Layout';
import NewBlackLayout from './NewBlackLayout';
import GreyLayout from './GreyLayout';
import VideoSliderLayout from './VideoSliderLayout';
import MasonryGallery from './MasonryGallery';
import SplitFeatureSection from './SplitFeatureSection';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Layout />
      <VideoSliderLayout />
      <NewBlackLayout />
      <MasonryGallery />
      <GreyLayout />
      <SplitFeatureSection />
    </div>
  );
};

export default Home;
