import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';

import CarPage from '../pages/CarPage/CarPage.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Suspense fallback={<div>Loading page....</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CarPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
