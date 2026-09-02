import React from 'react';
import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <p className="description">
          Explore our wide variety of house plants to purify your air and brighten your living space. 
          From aromatic herbs to medicinal wonders, we have everything you need to bring nature indoors.
        </p>
        <button className="get-started-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutUs;