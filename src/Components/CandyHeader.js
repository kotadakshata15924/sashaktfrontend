import React from 'react';
import { Link } from 'react-router-dom';
import home from '../Pics/house-solid.svg';
import about from '../Pics/about.svg';

const CandyHeader = ({ logo, toggleMute, isMuted, volume_off, volume_on, marginTop }) => {
  return (
    <div className="header9" style={{ marginTop: marginTop || '0px', width: '100%', zIndex: '100' }}>
      <div className='logo9'>
        <img src={logo} alt="mellow stack logo" />
      </div>
      <div className='icon9'>
        <Link to={"/"}> <img src={home} alt="mellow stack logo" /> </Link>
      </div>
      <div className='icon9'>
        <Link to={"/about"}> <img src={about} alt="about us logo" /> </Link>
      </div>
      <div className='icon9'>
        <button className='icon9' onClick={toggleMute}>
          {isMuted ? <img src={volume_off} alt="volume off button" /> : <img src={volume_on} alt="volume on button" />}
        </button>
      </div>
    </div>
  );
};

export default CandyHeader;
