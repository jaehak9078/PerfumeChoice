import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import perfumesData from '../assets/data/perfumes.json';

const PerfumeDetailPage = () => {
  const { id } = useParams(); 
  const [perfume, setPerfume] = useState(null);

  useEffect(() => {
    const findPerfumeById = () => {
      let selectedPerfume = null;
      for (const season in perfumesData) {
        selectedPerfume = perfumesData[season].find(p => p.id === parseInt(id));
        if (selectedPerfume) break;
      }
      setPerfume(selectedPerfume);
    };

    findPerfumeById();
  }, [id]);

  if (!perfume) {
    return <div className="container center" style={{fontWeight: 'bold', fontSize: '24px'}}>로딩 중...</div>;
  }

  return (
    <div className="container center" style={{ textAlign: 'center' }}>
      {/* 향수 이미지 */}
      <img 
        src={perfume.image} 
        alt={perfume.name} 
        style={{ width: '300px', height: '300px', objectFit: 'cover', marginBottom: '20px' }} 
      />
      
      {/* 향수 이름 */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        {perfume.name}
      </h1>
      
      {/* 향수 설명 */}
      <p style={{ fontSize: '16px', color: '#555' }}>
        {perfume.name}에 대한 설명
      </p>
      
    </div>
  );
};

export default PerfumeDetailPage;
