'use client';

import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState('');
  const [scrollYProgress] = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.2) {
      setNavStyle('sticky');
    } else {
      setNavStyle('');
    }
  });
  return (
    <div className="n-wrapper ${navStyle}">
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
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && 'translateX(0%)' }}
        >
          <span>WHAT WE DO</span>
          <span>HOW IT WORKS</span>
          <span>WHO WE INVEST IN</span>
          <span>TESTIMONIALS</span>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
