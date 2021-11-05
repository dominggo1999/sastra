import tw, { styled } from 'twin.macro';

export const StyledCol = styled.div`
  ${tw`
    relative
  `}

  padding-left: ${({ gutterWidth }) => `${gutterWidth / 2}px`};
  padding-right: ${({ gutterWidth }) => `${gutterWidth / 2}px`};
`;
