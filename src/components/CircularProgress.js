import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ title, usage, heater, lights }) => {
  return (
    <div className="circular-progress">
      <h3>{title}</h3>
      <div className="progress-circle">{usage} used</div>
      <div className="usage-stats">
        <p>Heater: {heater}</p>
        <p>Lights: {lights}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
