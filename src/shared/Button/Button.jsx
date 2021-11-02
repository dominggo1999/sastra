import React from 'react';
import { Btn } from './Button.style';

const Button = ({ onClick, children }) => {
  return (
    <Btn>
      {children}
    </Btn>
  );
};

export default Button;
