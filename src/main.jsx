import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AllProducts } from './pages/AllProducts';
import { ProductsSeller } from './pages/ProductSeller';
import { Checkout } from './pages/Checkout';
import { ProductSellerPage } from './pages/ProductSellerPage';
import { Header } from './components/Header';

import styles from './Main.module.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/productseller/:id" element={<ProductsSeller />} />
        <Route path="/checkout/:checkoutId" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
