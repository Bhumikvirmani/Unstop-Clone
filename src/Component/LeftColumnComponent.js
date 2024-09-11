import React, { useState, useEffect } from 'react';
import './LeftColumnComponent.css';
import imageUrl from '../Assests/imageUrl';

const LeftColumnComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="left-column">
      <div className="title">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" alt="Unstop Logo" />
      </div>
      <div className="main-image">
        <img className='imgsize' src={imageUrl[currentImageIndex]} alt="Woman Smiling" />
      </div>
    </div>
  );
};

export default LeftColumnComponent;