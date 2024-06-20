// src/VideoCard.jsx
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ src, title, description, year, author, price }) => {
  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          className="responsive-iframe"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Price:</strong> {price}</p>
      </div>
    </div>
  );
};

export default VideoCard;
