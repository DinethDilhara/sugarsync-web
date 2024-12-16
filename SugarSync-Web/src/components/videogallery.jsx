import React from 'react';

export const VideoGallery = (props) => {
  return (
    <div id="video-gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <br />
          <h2>Video Gallery</h2>
          <p>Explore our collection of engaging and informative videos tailored for you.</p>
        </div>
        <div className="row">
          <div className="video-gallery">
            <div className="video-container">
              <iframe
                width="960"
                height="315"
                src="https://www.youtube.com/embed/-qZZ3fEra1M?si=NyAyIFBPzg8GcBAv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZkE0WqHzDfU?si=K6Z32OhB8KKTo4-A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
