import tw, { styled } from 'twin.macro';

export const ScrollButton = styled.div`
  ${tw`
    fixed
    z-30
    p-3 
  `}
  bottom: 20px;
  right: 20px;
  transition: transform ease-in-out 100ms;
`;
