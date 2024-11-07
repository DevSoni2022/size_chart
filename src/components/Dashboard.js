import React from 'react';
import Card from './Card';
import LineChart from './LineChart';
import BarChart from './BarChart';
import CircularProgress from './CircularProgress';
import './Dashboard.css';
import PowerConsumption from './PowerConsumption';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-grid">
        <Card title="Fans" value="27" power="270" icon="🌀" />
        <Card title="Light" value="65" power="876" icon="💡" />
        <Card title="Refrigerator" value="4" power="0" icon="🧊" />
        <Card title="Air Condition" value="852" power="65" icon="❄️" />
      </section>

       <section className="dashboard-charts">
        <CircularProgress title="Power Consumption" usage="17%" heater="2095" lights="2360" />
        <LineChart title="Average Power Consumption (kWh)" />
        <BarChart title="Current Power Consumption (kWh)" value="1635.00" />
        <PowerConsumption />

      </section> 
    </main>
  );
};

export default Dashboard;
