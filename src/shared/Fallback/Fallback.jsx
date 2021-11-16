import React from 'react';
import { Container } from 'react-grid-system';
import tw, { styled } from 'twin.macro';
import { Spinner, Skeleton } from '../Spinner';

export const Wrapper = styled.div`
  ${tw`
    w-full 
    h-96 
    flex 
    items-center 
    justify-center
  `}
`;

const Fallback = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner>
          <Skeleton />
        </Spinner>
      </Wrapper>
    </Container>
  );
};

export default Fallback;
