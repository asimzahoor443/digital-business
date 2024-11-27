import React from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
const EmailBox = () => {
  return (
    <div className="emailBox">
      {/* ICON */}
      <div>
        <LuMail size={30} color="gray" />
      </div>

      {/* Input */}
      <input type="email" placeholder="Enter Email" />

      {/* Get Funded Button*/}
      <div className="getFunded">Get Funded</div>
    </div>
  );
};

export default EmailBox;
