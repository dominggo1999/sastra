import React from 'react';
import { MessageStyle } from './FormMessage.style';

const FormMessage = ({ children }) => {
  return (
    <MessageStyle>
      {children}
    </MessageStyle>
  );
};

export default FormMessage;
