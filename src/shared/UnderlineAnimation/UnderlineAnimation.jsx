import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const UnderlineAnimation = styled.span`
  background-image: linear-gradient(${colors.lightBlue}, ${colors.lightBlue});
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: ${(props) => `0% ${props.size ? props.size : 6}px`};
  transition: background-size 700ms;

  

  &:hover {
    background-size: ${(props) => `100% ${props.size ? props.size : 6}px`};
  } 
`;
