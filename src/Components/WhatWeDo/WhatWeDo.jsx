import React from 'react';
import './WhatWeDo.css';
import './WhatWeDo.css';
import { features } from '@/src/utils/data';
import Image from 'next/image';
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head of section */}
          <div className="wwd-head">
            <span className="tag">What we do</span>
            <span className="title">
              Empowering founders with non dilutive cap expertise
            </span>
            <span className="des">her is how we can evaluate</span>
          </div>

          {/* Two blocls*/}

          <div className="wwd-blocks">
            {/* First Block */}
            <div className="wwd-block">
              <span className="sec-title">Blue Advances</span>
              <span className="text">
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <div className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Block */}
            <div className="wwd-block">
              <span className="sec-title">Blue Seed</span>
              <span className="text">
                Fund one-offs to scale e.g. product, hiring
              </span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <div className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support Block*/}
          <div className="wwd-support">
            {/* Left Side */}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data insights and full stack expertise to supercharge growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
