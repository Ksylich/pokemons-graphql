import React from 'react';


import leftArrow from '../../assets/icons/left-arrow.png';
import rightArrow from '../../assets/icons/right-arrow.png';

import './pokemon-details-mb.css';

const MobNav = ({ onHandleBack, onHandleNext }) => (
  <div className="nav-bar-m">
    <div className="left-m">
      <div>
        <img src={leftArrow} alt="Smiley face" height={40} width={40} />
      </div>
      <div onClick={onHandleBack} role="presentation" className="text">Back</div>
    </div>
    <div className="right-m">
      <div>
        <div onClick={onHandleNext} role="presentation" className="text">Next</div>
      </div>
      <div>
        <img src={rightArrow} alt="Smiley face" height={40} width={40} />
      </div>
    </div>
  </div>
);


export default MobNav;
