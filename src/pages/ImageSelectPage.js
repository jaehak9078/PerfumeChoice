import React from 'react';
const ImageSelectPage = () => {
  const handleNavigation = (season) => {
    // 예: 페이지 이동 로직
    window.location.href = `/${season}`;
  };

  return (
    <div className="image-container">
      <img src="/Seasons.jpg" alt="seasons" className="responsive-image2" />
      <button className="season-button spring" onClick={() => handleNavigation('spring')}>Spring</button>
      <button className="season-button summer" onClick={() => handleNavigation('summer')}>Summer</button>
      <button className="season-button autumn" onClick={() => handleNavigation('autumn')}>Autumn</button>
      <button className="season-button winter" onClick={() => handleNavigation('winter')}>Winter</button>
    </div>
  );
};

export default ImageSelectPage;
