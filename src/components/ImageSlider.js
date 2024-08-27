import React, { useEffect, useState } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
      return () => clearInterval(intervalId);
    }
  }, [images]);

  if (images.length === 0) return <p>No Image Available</p>;

  return (
    <div className="property-image">
      <img src={images[currentIndex].base64} alt="Property" />
    </div>
  );
}

export default ImageSlider;
