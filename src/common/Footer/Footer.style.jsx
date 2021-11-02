import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const FooterWrapper = styled.footer`
  ${tw`
    py-10
  `}
`;

export const FooterTextContent = styled.p`
  ${tw`
    font-scPro 
    text-sm 
    mt-8
  `}
`;

export const FooterSocials = styled.ul`
  ${tw`
    flex    
    flex-wrap
    mt-8
    mb-8 
    lg:mb-0
  `}
`;

export const FooterIcon = styled.li`
  a{
    ${tw`
      inline-block
      text-xl
      mr-2 
      p-2
      hover:text-lightBlue
      hover:bg-primary
      hover:rounded-full
      transition-all
      duration-200
      ease-in-out    
    `}
  }
`;

export const Copyright = styled.div`
  ${tw`
    font-scPro
    text-sm 
    py-10
  `}

  a {
    background-image: linear-gradient(${colors.lightBlue}, ${colors.lightBlue});
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 3px;
    transition: background-size 700ms;
    ${tw`
      text-primary 
      font-bold
    `}
  }
`;
