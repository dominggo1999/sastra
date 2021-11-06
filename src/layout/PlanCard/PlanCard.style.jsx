import tw, { styled } from 'twin.macro';

export const Card = styled.div`
  ${tw`
    relative 
    text-center 
    border-dashed
    border-primary 
    border
    px-8
    xl:px-14
    py-10 
    h-full
    flex
    flex-col
  `}

  button {
    ${tw` 
      mx-0
      xl:mx-6
      mt-auto 
      justify-self-end
    `}
  }
`;

export const Label = styled.h1`
  ${tw`
    absolute
    left-0 
    bg-lightBlue 
    font-scPro 
    text-sm
  `}

  bottom : calc(100% + 12px);
`;

export const Currency = styled.sup`
  ${tw`
    relative
  `}

  font-size: 50%;
  top: -25px;
`;

export const Price = styled.p`
  ${tw`
    font-bold
    font-spartan
    text-primary
    text-6xl
    md:text-7xl
    mb-4
    md:mb-10
  `}
`;

export const Description = styled.p`
  ${tw`
    font-scPro
    text-sm 
    text-primary 
    leading-loose 
    mb-8
  `}
`;
