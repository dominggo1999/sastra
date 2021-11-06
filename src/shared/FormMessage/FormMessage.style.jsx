import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const MessageStyle = styled.span`
  ${tw`
    w-full
    inline-block
    font-scPro
    text-sm 
    py-10
    mx-auto
  `}

  ${({ center }) => (
    center
      ? tw`text-center`
      : tw`text-left`)}

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
