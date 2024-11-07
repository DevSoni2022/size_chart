import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Power Analytics</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>Dashboard</li>
          <li>Layouts</li>
          <li>Mailbox</li>
          <li>Calendar</li>
          <li>UI Elements</li>
          <li>Forms</li>
          <li>Pages</li>
          <li>Tables</li>
          <li>Charts</li>
          <li>Maps</li>
          <li>Profile</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
