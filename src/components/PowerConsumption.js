import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './PowerConsumption.css';

const PowerConsumption = () => {
  // Data for the doughnut chart
  const data = {
    datasets: [
      {
        data: [17, 83], // 17% used, 83% remaining
        backgroundColor: ['#4A90E2', '#e0e0e0'], // Used and remaining colors
        borderWidth: 0,
        cutout: '70%', // Inner space for circular effect
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip for simplicity
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="power-consumption">
      <h3>Power Consumption</h3>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="center-text">
          <span>17%</span>
          <p>used</p>
        </div>
      </div>
      <div className="consumption-details">
        <div className="consumption-item">
          <span className="consumption-label">Heater</span>
          <span className="consumption-value">2,095</span>
        </div>
        <div className="consumption-item">
          <span className="consumption-label">Lights</span>
          <span className="consumption-value">2,360</span>
        </div>
      </div>
    </div>
  );
};

export default PowerConsumption;
