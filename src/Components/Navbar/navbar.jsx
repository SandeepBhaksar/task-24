import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/deer-hunter-logo.jpg" alt="logo" />
      </div>

      <div className="contents">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};

export default Navbar;
