import React from 'react';
import { MessageStyle } from './FormMessage.style';

const FormMessage = ({ children, center }) => {
  return (
    <MessageStyle center={center}>
      {children}
    </MessageStyle>
  );
};

export default FormMessage;
