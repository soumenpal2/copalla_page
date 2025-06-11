import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import Layout from "./components/second-Layout";
import NewBlackLayout from "./components/NewBlackLayout";
import GreyLayout from "./components/GreyLayout";
import VideoSliderLayout from './components/VideoSliderLayout';
import MasonryGallery from './components/MasonryGallery';
import SplitFeatureSection from './components/SplitFeatureSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Layout />
      <VideoSliderLayout />
      <NewBlackLayout />
      <MasonryGallery/>
      <GreyLayout/>
      <SplitFeatureSection/>
    </div>
  );
}

export default App;

