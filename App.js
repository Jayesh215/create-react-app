import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </CartProvider>
    );
};

export default App;
