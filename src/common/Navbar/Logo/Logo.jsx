import React from 'react';
import { Link } from 'react-router-dom';
import { LogoBrand, LogoText } from './Logo.style';

const Logo = () => {
  return (
    <Link to="/">
      <LogoBrand>
        <LogoText>
          Sastra
        </LogoText>
      </LogoBrand>
    </Link>
  );
};

export default Logo;
