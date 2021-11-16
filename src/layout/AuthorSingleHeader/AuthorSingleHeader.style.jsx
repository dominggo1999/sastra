import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    mt-12 
    text-center  
    text-primary
  `}
`;

export const Name = styled.h2`
  ${tw`
    font-spartan 
    text-4xl
    md:text-5xl
    font-bold
    my-6
    mb-3
  `}
`;

export const Meta = styled.div`
  ${tw`
    font-scPro 
    text-sm
  `}
`;

export const Socials = styled.div`
  ${tw`
    my-2
    md:my-4
  `}
`;
