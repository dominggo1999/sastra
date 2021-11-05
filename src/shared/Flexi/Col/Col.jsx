import React, { useContext } from 'react';
import tw from 'twin.macro';
import { StyledCol } from './Col.style';
import { GutterWidthContext } from '../Row/Row';

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  ...restProps
}) => {
  const gutterWidth = useContext(GutterWidthContext);

  return (
    <StyledCol
      {...restProps}
      gutterWidth={gutterWidth}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
