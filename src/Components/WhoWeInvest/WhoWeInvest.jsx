import React from 'react';
import './WhoWeInvest.css';
import { whoWeInvest } from '@/src/utils/data';
import { motion } from 'framer-motion';
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from '@/src/utils/animation';
const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper" id="wwi">
      <div className="container">
        <div className="wwi-container">
          {/* Left Side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView={'onscreen'}
                className="tag"
              >
                Who we Invest in
              </motion.span>
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={'onscreen'}
                className="title"
              >
                Digital businesses <br /> with early traction
              </motion.span>
            </div>
            {/* Features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVariants(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={'onscreen'}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="wwi-right">
            <motion.img
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView={'onscreen'}
              src="persons.png"
              alt="persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
