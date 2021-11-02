import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const PinnedSectionWrapper = styled.div`
  ${tw`
    border-black
    p-10
    border-dashed
    border-primary
  `}

@media screen and (max-width:${breakpoints.md}px){
    border-width : 1px;
  }
`;
