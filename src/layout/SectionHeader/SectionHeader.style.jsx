import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const Wrapper = styled.div`
  ${tw`
    py-20 
    relative
  `}
`;

export const Box = styled.div`
   ${tw`
    absolute
    w-7/12
    right-0
    top-5
  `}
  height: 230px;
`;

export const BackgroundBox = styled(Box)`
  z-index: -2;
  height: 230px;
  background: ${({ bg }) => bg};
`;

export const DotsBackground = styled(Box)`
  z-index: -1;
  background-image: radial-gradient(${colors.primary} 7%, transparent 0);
  background-size: 28px 28px;
  opacity: 0.65;
`;

export const Title = styled.div`
  ${tw`
    font-spartan
    text-primary
    text-center
    font-bold
    text-5xl
    md:text-6xl
    lg:text-7xl
    mb-4
  `}

`;

export const Description = styled.div`
  ${tw`
    mx-auto
    text-lg
    md:text-xl
    text-center
    font-scPro
    w-full
    md:w-7/12
  `}
`;
