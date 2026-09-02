import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onNavigateToCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b31346ba3", description: "Calming scent, great for relaxation.", cost: "$15" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729711674-32eb1ea33f5a", description: "Sweet fragrance that blooms at night.", cost: "$18" }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09", description: "Soothing gel for skin care and minor burns.", cost: "$10" },
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599598425949-043003444627", description: "Excellent air purifier and low maintenance.", cost: "$12" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <h2 onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>Paradise Nursery</h2>
        <div>
          <span style={{ marginRight: '20px', cursor: 'pointer' }}>Plants</span>
          <span onClick={onNavigateToCart} style={{ cursor: 'pointer' }}>
            🛒 Cart ({totalCartCount})
          </span>
        </div>
      </nav>

      {plantsArray.map((categoryObj, index) => (
        <div key={index} className="category-section">
          <h2>{categoryObj.category}</h2>
          <div className="plant-grid">
            {categoryObj.plants.map((plant, pIndex) => (
              <div key={pIndex} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-img" />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>
                <button 
                  className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
