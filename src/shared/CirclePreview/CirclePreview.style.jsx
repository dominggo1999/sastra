import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const Card = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center 
  `}

  ${({ big }) => (
    big
      ? tw`md:mb-0`
      : tw`mb-10`)}
`;

export const CardImage = styled.div`
  ${tw`
    flex 
    justify-center
  `}

  img {
    border: 1px;
    width: 152px;
    aspect-ratio: 1;
    ${tw`
      p-2
      object-cover
      rounded-full
      border-dashed
    `}
  }

  @media screen and (min-width:${breakpoints.md}px){
      img{
        width: ${({ big }) => (big ? '200px' : '152px')};
        }
      }
`;

export const Name = styled.h3`
  ${tw`
    text-center
    mt-4
    mb-2
    font-spartan 
    text-xl 
    font-bold 
    text-primary
  `}

  ${({ big }) => (
    big
      ? tw`text-2xl`
      : tw`text-xl`)}
`;

export const NumOfPost = styled.p`
  ${tw`
    font-scPro 
    text-sm 
    text-primary
  `}
`;
