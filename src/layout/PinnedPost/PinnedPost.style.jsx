import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';
import { colors } from '../../constants/colors';

export const PinnedPostWrapper = styled.div`
  ${tw`
    relative 
    border-lightBlue 
    border-t-4
    w-full
  `}
`;

export const PinnedPostCard = styled.div`
  ${tw`
    w-full
    pr-4
    md:border-dashed
    border-primary
    mt-4
    pt-2
    h-full
  `}


  @media screen and (min-width:${breakpoints.md}px){
    border-right-width : 1px;
  }
`;

export const PinnedPostCardTitle = styled.h3`
  ${tw`
    absolute 
    font-scPro 
    bottom-full 
    left-0
    bg-lightBlue 
    text-sm
  `}
`;

export const PinnedPostTitle = styled.h1`
  ${tw`
    font-spartan
    text-xl
    font-bold 
    mb-2
    inline
  `}

 
`;

export const PinnedPostCardAuthor = styled.p`
  ${tw`
    font-scPro 
    text-sm
  `}
`;
