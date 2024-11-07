import React from 'react';
import './Card.css';

const Card = ({ title, value, power, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{value}</p>
        <span>Power Consumption: {power}</span>
      </div>
    </div>
  );
};

export default Card;
