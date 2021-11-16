import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    py-10
    text-primary
  `}
`;

export const Name = styled.div`
  ${tw`
    font-spartan 
    text-3xl
    md:text-5xl
    font-bold
    my-5
    text-center
  `}
`;

export const Description = styled.p`
  ${tw`
    mx-auto
    font-spartan 
    w-10/12
    md:w-7/12
    text-center
  `}
`;
