import React from 'react';
import { Link } from 'react-router-dom';
import NextButton from '../components/NextButton';

const MainPage = () => {
  return (
    <div className="container center">
      <img src="/main_logo.png" alt="Logo" className="responsive-image" />
      <NextButton>
        <Link to="/select-image">시작하기</Link>
      </NextButton>
    </div>
  );
};

export default MainPage;
