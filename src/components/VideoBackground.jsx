// src/components/VideoBackground.jsx
import React from 'react';
import '../style2.css'; // Ensure this path is correct for your project structure

const VideoBackground = () => {
  return (
    <div className="video-background-wrapper">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={require('../assets/bg-video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
