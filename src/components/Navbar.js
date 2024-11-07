import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <input type="text" placeholder="Search here..." className="search-bar" />
      <div className="profile">
        <span>Johnathan Doe</span>
        {/* Profile icon */}
      </div>
    </header>
  );
};

export default Navbar;
