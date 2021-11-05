import React from 'react';
import { Title } from './FormTitle.style';

const FormTitle = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  );
};

export default FormTitle;
