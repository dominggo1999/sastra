import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const Wrapper404 = styled.div`
  ${tw`
    w-4/5
    mx-auto
    text-center
    py-10
    font-spartan
  `}
`;

export const ErrorCode = styled.h1`
  ${tw`
    font-bold
    text-primary
  `}

  font-size: 100px;
  line-height: 100px;


  @media screen and (min-width:${breakpoints.md}px){
    font-size: 180px;
    line-height: 180px;
  }
`;

export const ErrorMessage = styled.h3`
  ${tw`
    text-primary
    text-2xl
    py-5
  `}
`;
