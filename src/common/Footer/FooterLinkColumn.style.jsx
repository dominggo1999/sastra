import tw, { styled } from 'twin.macro';

export const Column = styled.div`
  ${tw`
    flex 
    flex-col
    justify-center 
    mb-8 
    sm:mb-0
  `}
`;

export const FooterLink = styled.div`
  ${tw`
    font-spartan
    text-primary
    text-sm
    font-semibold
    pb-5
  `}
`;
