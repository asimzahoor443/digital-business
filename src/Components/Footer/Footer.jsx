import React from 'react';
import './Footer.css';
import EmailBox from '../EmailBox/EmailBox';
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today</span>
          <EmailBox />
          <hr />
          <div className="f-menu">
            <span id="navbar">Home</span>
            <span id="wwd">What we do</span>
            <span id="hiw">How it works</span>
            <span id="wwi"> Who we invest in</span>
            <span id="testimonials">Testimonials</span>
          </div>
          <hr />
          <span className="text">Made with ❣️ by Asim Zahoor</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
