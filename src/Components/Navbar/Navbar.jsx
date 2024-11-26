import React from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/*Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left Side */}
          <span>EdenBug</span>
          <div className="n-logo"></div>
          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <span>WHAT WE DO</span>
              <span>HOW IT WORKS</span>
              <span>WHO WE INVEST IN</span>
              <span>TESTIMONIALS</span>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>

      {/*Mobile/Tab Version */}
      <div className="nm-container">
        {/* Logo */}
        <span>EdenBug</span>

        {/* menu icon */}
        <BiMenuAltRight size={30} />

        {/* Mobile Menu */}
        <div className="nm-menu">
          <span>WHAT WE DO</span>
          <span>HOW IT WORKS</span>
          <span>WHO WE INVEST IN</span>
          <span>TESTIMONIALS</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
