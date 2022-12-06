import React from 'react';

const VideoSection = ({ videoKey }) => {
  return (
    <div className="card video-card w-100 m-auto my-5"> 
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div> 
    </div>
  );
};

export default VideoSection;
