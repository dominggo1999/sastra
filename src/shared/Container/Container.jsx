import React from 'react';
import { ContainerStyle } from './Container.style';

const Container = ({ children }) => {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
};

export default Container;
