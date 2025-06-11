import React from 'react';
import './VideoGrid.css';

const videos = [
  { src: '/videos/video-1.mp4', title: 'MAIN HOME', link: 'https://example.com/1' },
  { src: '/videos/video2.mp4', title: 'VERTICAL SPLIT SHOWCASE', link: 'https://example.com/2' },
  { src: '/videos/video3.mp4', title: 'HORIZONTAL SCROLL SHOWCASE ', link: 'https://example.com/3' },
  { src: '/videos/video-4.mp4', title: 'FILM FESTIVAL', link: 'https://example.com/4' },
  { src: '/videos/video5.mp4', title: 'FILM BANNER SHOWCASE', link: 'https://example.com/5' },
  { src: '/videos/video6.mp4', title: 'FILM PRESENTATION', link: 'https://example.com/6' },
  { src: '/videos/video7.mp4', title: 'VIDEO SLIDER', link: 'https://example.com/7' },
  { src: '/videos/video8.mp4', title: 'FULL SCREEN SLIDER', link: 'https://example.com/8' },
  { src: '/videos/video9.mp4', title: 'FILM GALLERY', link: 'https://example.com/9' },
  { src: '/videos/video10.mp4', title: 'FILM MAGAZINE', link: 'https://example.com/10' },
  { src: '/videos/video11.mp4', title: 'INTERECTIVE SCROLL SHOWCASE', link: 'https://example.com/11' },
];

export default function VideoGrid() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <video src={video.src} muted autoPlay loop playsInline />
            </a>
            <p className="video-text">{video.title}</p>
          </div>
        ))}

        {/* 12th item  */}
        <div className="video-item text-only">
          <div className="text-block">
            <h3>PRESENT YOUR FILMS  PROMOTE NEWS AND FESTIVALS</h3>
            
          </div>
        </div>
      </div>
    </section>
  );
}
