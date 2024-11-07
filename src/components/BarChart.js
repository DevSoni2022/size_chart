import React from 'react';
import { Bar as BarJS } from 'chart.js/auto'
import { Bar }            from 'react-chartjs-2'
import './BarChart.css';

const BarChart = ({ title, value }) => {
  const data = {
    labels: Array.from({ length: 12 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Power (kWh)',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 3000)),
        backgroundColor: 'teal',
      },
    ],
  };

  return (
    <div className="bar-chart">
      <h3>{title}</h3>
      <h2>{value}</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
