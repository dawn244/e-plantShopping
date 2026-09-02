import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div className="app">
      {currentView === 'landing' && (
        <AboutUs onGetStarted={() => setCurrentView('products')} />
      )}
      {currentView === 'products' && (
        <ProductList onNavigateToCart={() => setCurrentView('cart')} />
      )}
      {currentView === 'cart' && (
        <CartItem onContinueShopping={() => setCurrentView('products')} />
      )}
    </div>
  );
}

export default App;