import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const PreviewWrapper = styled.article`
  ${tw`
    flex 
    flex-col
    relative   
    mb-16
    md:pl-6
    md:border-dashed
    md:border-primary
    md:border-l
  `}
`;

export const ImageContent = styled.div`
  ${tw`
    absolute
    top-0
    h-full 
    right-0
  `}

  &::before {
    ${tw`
      absolute
    `}

    content:"";
    display: inline-block;
    height: 95px;
    aspect-ratio: 1 / 1;
    z-index: -1;
    background:  ${(props) => props.bg};
    transform: translate(-10px,-10px);

    @media screen and (min-width:${breakpoints.md}px){
      height: 135px;
    }
  }

  img{
    ${tw`
      relative
      object-cover
      sm:mr-3
    `}
    
    aspect-ratio: 1 / 1;
    height: 95px;

    @media screen and (min-width:${breakpoints.md}px){
      height: 135px;
    }
  }
`;

export const Title = styled.div`
  ${tw`
    font-spartan
    text-primary
    text-3xl 
    font-bold 
    mb-3
  `}
`;

export const Meta = styled.div`
  ${tw`
    font-scPro 
    text-sm 
    text-primary 
    mb-6
    w-full
    md:w-3/5
    lg:w-full
  `}
`;

export const Excerpt = styled.p`
  ${tw`
    text-primary 
    text-sm 
    font-spartan 
    xl:pr-44
  `}
`;

export const Tags = styled.div`
  ${tw`
    flex 
    pt-8
  `}

  a {
    ${tw`
      font-scPro 
      mr-5 
      text-sm 
      text-primary
    `}
  }
`;
