import './assets/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ImageSelectPage from './pages/ImageSelectPage';
import PerfumesPage from './pages/PerfumesPage';
import PerfumeDetailPage from './pages/PerfumeDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 계절 이미지 선택 페이지 */}
        <Route path="/select-image" element={<ImageSelectPage />} />

        {/* 향수 리스트 페이지 */}
        <Route path="/perfumes/:season" element={<PerfumesPage />} />

        {/* 향수 상세 정보 페이지 */}
        <Route path="/perfumeDetail/:id" element={<PerfumeDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
