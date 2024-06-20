// src/App.jsx
import React from 'react';
import VideoCard from './VideoCard';

const App = () => {
  const videos = [
    {
      src: "videos/video2.mp4",
      title: "Sample Video 1",
      description: "This is a description of the first sample video.",
      year: "2021",
      author: "John Doe",
      price: "$19.99"
    },
    {
      src: "videos/video3.mp4",
      title: "Sample Video 2",
      description: "This is a description of the second sample video.",
      year: "2022",
      author: "Jane Smith",
      price: "$29.99"
    },
    // Add more video objects here
  ];

  return (
    <div className="App">
      <h1>Responsive Video Cards</h1>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          src={video.src}
          title={video.title}
          description={video.description}
          year={video.year}
          author={video.author}
          price={video.price}
        />
      ))}
    </div>
  );
};

export default App;
