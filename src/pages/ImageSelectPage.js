import React from 'react';
const ImageSelectPage = () => {
  const handleNavigation = (season) => {
    // 예: 페이지 이동 로직
    window.location.href = `/perfumes/${season}`;
  };

  return (
    <div className="image-container">
      <img src="/Seasons.jpg" alt="seasons" className="responsive-image2" />
      <button className="season-button spring" onClick={() => handleNavigation('spring')}>따뜻하고 포근한 이미지</button>
      <button className="season-button summer" onClick={() => handleNavigation('summer')}>뜨겁고 에너지가 넘치는 이미지</button>
      <button className="season-button autumn" onClick={() => handleNavigation('autumn')}>선선하고 낭만적인 이미지</button>
      <button className="season-button winter" onClick={() => handleNavigation('winter')}>차갑고 고요한 이미지</button>
    </div>
  );
};

export default ImageSelectPage;
