import React, { useContext } from 'react';
import { ContainerStyle } from './Container.style';
import { getConfiguration } from '../config';

const Container = ({ children, ...restProps }) => {
  const gutterWidth = getConfiguration().gutterWidth;

  return (
    <ContainerStyle
      gutterWidth={gutterWidth}
      {...restProps}
    >
      {children}
    </ContainerStyle>
  );
};

export default Container;
