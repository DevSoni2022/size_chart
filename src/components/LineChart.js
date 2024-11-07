import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import './LineChart.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = ({ title }) => {
  const data = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2019'],
    datasets: [
      {
        label: 'Average Power Consumption (kWh)',
        data: [2000, 3000, 2500, 4000, 3500, 3000],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(74, 144, 226, 0.4)');
          gradient.addColorStop(1, 'rgba(74, 144, 226, 0)');
          return gradient;
        },
        borderColor: '#4A90E2',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        hoverRadius: 6, // Larger point on hover for better visibility
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#4A90E2',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        callbacks: {
          label: function (tooltipItem) {
            // Display the y-axis value on hover
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} kWh`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#666',
        },
      },
      y: {
        grid: {
          color: '#e0e0e0',
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 500,
          beginAtZero: true,
          font: {
            size: 12,
          },
          color: '#888',
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="line-chart">
      <h3>{title}</h3>
      <div style={{ height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
