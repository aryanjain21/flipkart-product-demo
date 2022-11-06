import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Product from './pages/product/product';
import Header from './pages/header/header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
