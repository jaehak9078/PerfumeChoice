import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Link to="/select-image">이미지 선택 페이지로 이동</Link>
    </div>
  );
};

export default MainPage;
