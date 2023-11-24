import React from 'react';
import './logo.css';

const Logo = ({ width, height }) => {
  return (
    <div className='logo'>
    <img
      src="https://www.assiduusglobal.com/images/assiduus-logo-dark.png"
      viewBox="0 0 24 24"
      width={width}
      height={height}/>
      </div>
  );
};

export default Logo;