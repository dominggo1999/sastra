import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';
import { colors } from '../../constants/colors';

export const PreviewWrapper = styled.article`
  ${tw`
    relative 
    py-8 
    my-16
    flex 
    flex-col 
  `}
`;

export const ImageContent = styled.div`
  ${tw`
    mb-20 
    md:absolute
    md:right-0 
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    h-full
    right-0 
    top-0
    relative
  `}

  img {
    ${tw`
      mx-auto
    `}
    width: 300px;
    max-height : 100%;
    height: 450px;
    object-fit: cover;

    @media screen and (min-width:${breakpoints.md}px){
      height: 100%;
    }
    @media screen and (min-width:${breakpoints.lg}px){
      width: 350px;
    }
  }
`;

export const BackgroundColor = styled.div`
  ${tw`
    right-0
    top-0
    absolute 
  `}

  z-index: -2;
  background: ${(props) => props.bg};
  width: 100%;
  height: 400px;
  transform: translateX(50%);
  right: 50%;

  @media screen and (min-width:${breakpoints.md}px){
    transform: translate(-30px,-60px);
    width: 380px;
    height : 500px;
    right: 0;
  }

  @media screen and (min-width:${breakpoints.lg}px){
    width: 420px;
    height: 510px;
  }
`;

export const DotsBackground = styled.div`
  ${tw`
    absolute 
    top-0
  `}
  
  z-index: -1;
  background-image: radial-gradient(${colors.primary} 7%, transparent 0);
  background-size: 28px 28px;
  opacity: 0.65;
  width: 110%;
  height: 500px;
  transform: translateX(50%);
  right: 50%;

  @media screen and (min-width:${breakpoints.md}px){
    transform: translate(-30px,-40px);
    width: 500px;
    height : 590px;
    right: -80px;
  }
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

export const Title = styled.h2`
  ${tw`
    text-primary 
    font-spartan
    text-4xl
    md:text-5xl 
    lg:text-7xl 
    font-bold 
    leading-none
    mb-6
    font-bold
    md:leading-tight
  `}
`;

// @media screen and (min-width:${breakpoints.md}px){
//   font-size: 180px;
//   line-height: 180px;
// }

export const Excerpt = styled.p`
  ${tw`
    text-primary 
    font-bold
    text-sm 
    font-spartan
    md:w-4/5
    leading-loose
  `}
  @media screen and (min-width:${breakpoints.lg}px){
    column-count: 2;
  }
`;

export const Tags = styled.div`
  ${tw`
    flex 
    pt-8
    md:pb-24
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
