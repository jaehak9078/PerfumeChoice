import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import perfumesData from '../assets/data/perfumes.json';

const PerfumesPage = () => {
  const { season } = useParams();
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetchPerfumesBySeason(season);
  }, [season]);

  const fetchPerfumesBySeason = (season) => {
    setPerfumes(perfumesData[season] || []);
  };

  return (
    <div className="container center">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {perfumes.map((perfume) => (
            <li key={perfume.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              {/* 향수 이미지 */}
              <img src={perfume.image} alt={perfume.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              
              {/* 향수 이름과 상세 페이지 링크 */}
              <Link to={`/perfumeDetail/${perfume.id}`} style={{ textDecoration: 'none', color: '#333', fontSize: '18px', fontWeight: 'bold' }}>
                {perfume.name}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfumesPage;
