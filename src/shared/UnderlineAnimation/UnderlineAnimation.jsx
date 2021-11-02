import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const UnderlineAnimation = styled.span`
  background-image: linear-gradient(${colors.lightBlue}, ${colors.lightBlue});
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 6px;
  transition: background-size 700ms;

  &:hover {
    background-size: 100% 6px;
  } 
`;
