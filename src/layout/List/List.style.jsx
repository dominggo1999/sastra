import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const ListWrapper = styled.div`
  ${tw`
    
  `}
`;

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

export const CardImage = styled.div`
  ${tw`
    flex 
    justify-center
  `}
`;

export const Card = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    mb-10
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
`;

export const NumOfPost = styled.p`
  ${tw`
    font-scPro 
    text-sm 
    text-primary
  `}
`;

export const BigCard = styled(Card)`
  ${tw`
    md:mb-0
  `}

  ${Name} {
    ${tw`
      mt-4
      mb-2
      font-spartan 
      text-2xl 
      font-bold 
      text-primary
    `}
  }

  @media screen and (min-width:${breakpoints.md}px){
  img{
      width: 200px;
    }
  }
`;
