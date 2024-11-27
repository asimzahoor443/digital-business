import React from 'react';
import './Hero.css';
import EmailBox from '../EmailBox/EmailBox';
const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          {/* Left Side */}
          <div className="h-left">Left Side</div>

          {/* Right Side */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grow your</span>
              <span>Digital Business</span>
            </div>
            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
