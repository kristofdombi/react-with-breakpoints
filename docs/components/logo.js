import React from 'react';
import logo from '../../assets/logo.svg';

const Logo = () => (
  <div className="logo-wrapper">
    <img src={ logo } className="logo" />
    <p className="logo-text">react with breakpoints</p>
  </div>
);

Logo.displayName = 'Logo';

export default Logo;
