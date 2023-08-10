import React from "react";
import "./Nav.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">Your App Title</span>
      </div>
      <div className="navbar-middle">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <button className="nav-button">Button</button>
      </div>
    </div>
  );
}

export default Navbar;
