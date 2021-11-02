import tw, { styled } from 'twin.macro';

export const PinnedPageCard = styled.div`
  ${tw`
    w-full
    relative 
    border-lightYellow 
    border-t-4
    lg:mb-0 
    mb-10
  `}
`;

export const PinnedPageTitle = styled.h1`
  ${tw`
    font-spartan
    text-xl
    font-bold 
    py-4 
    my-2
  `}
`;

export const PinnedPageCardTitle = styled.h3`
  ${tw`
    absolute 
    font-scPro 
    bottom-full 
    left-0
    bg-lightYellow 
    text-sm
  `}
`;
