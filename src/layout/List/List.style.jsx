import tw, { styled } from 'twin.macro';

export const BottomListWrapper = styled.div`
  ${tw`
    lg:px-48
  `}
`;

export const ListHeader = styled.p`
  ${tw`
    flex 
    justify-center
    w-full
    font-spartan
    text-xl 
    text-primary 
    font-semibold
    mt-2
    mb-8
  `}

  ${({ spaceTop }) => spaceTop && tw`mt-8 md:mt-28`}
`;
