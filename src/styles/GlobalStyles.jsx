import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }

  @font-face {
    font-family: 'Sabrina Pamella';
    font-style: normal;
    font-weight: 400;
    src: local('Sabrina Pamella'), url('https://res.cloudinary.com/test123123/raw/upload/v1635831613/fonts/Sabrina_Pamella_demo_bd5rit.woff') format('woff');
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
