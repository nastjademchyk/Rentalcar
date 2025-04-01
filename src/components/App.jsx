import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from '../pages/HomePage/HomePage.jsx';
import Layout from './Layout.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
// import CarPage from '../pages/CarPage/CarPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/catalog/:id" element={<CarPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
