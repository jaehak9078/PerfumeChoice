import React from 'react';
const ImageSelectPage = () => {
  const handleNavigation = (season) => {
    // 예: 페이지 이동 로직
    window.location.href = `/perfumes/${season}`;
  };

  return (
    <div className="season-container">
      <div className="season">
        <img src="/Spring.png" alt="Spring" />
        <button className="season-button" onClick={() => handleNavigation('spring')}>
        따뜻하고 포근한 이미지
        </button>
      </div>
      
      <div className="season">
        <img src="/Summer.png" alt="Summer" />
        <button className="season-button" onClick={() => handleNavigation('summer')}>
        뜨겁고 에너지가 넘치는 이미지
        </button>
      </div>
      
      <div className="season">
        <img src="/Autumn.png" alt="Autumn" />
        <button className="season-button" onClick={() => handleNavigation('autumn')}>
        선선하고 낭만적인 이미지
        </button>
      </div>
      
      <div className="season">
        <img src="/Winter.png" alt="Winter" />
        <button className="season-button" onClick={() => handleNavigation('winter')}>
        차갑고 고요한 이미지
        </button>
      </div>
    </div>
  );
};

export default ImageSelectPage;
