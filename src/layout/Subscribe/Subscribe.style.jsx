import tw, { styled } from 'twin.macro';
import { breakpoints } from '../../constants/tailwindBreakpoints';

export const SubscribeWrapper = styled.div`
  ${tw`
    flex
    md:flex-row 
    flex-col
    justify-between
    md:items-center 
    flex-wrap
  `}
`;

export const SubscribeText = styled.h3`
  ${tw`
    font-spartan
    text-primary
    text-4xl
    font-bold 
    lg:mb-0 
    mb-6
  `}
`;

export const SubscribeForm = styled.form`
  ${tw`
    flex 
  `}

  input {
    width: 20%;
    ${tw`
      bg-primary
      p-5 
      outline-none
      text-white 
      font-spartan 
      font-semibold 
      flex-grow
    `}

    &::placeholder {
      ${tw`
        text-white 
        font-spartan
      `}
    }

    @media screen and (min-width:${breakpoints.lg}px){
      transition: all ease-in-out 100ms;
      width: 250px;

      &:focus {
        width: 270px;
      }
    }
  }

  button {
    ${tw`
      bg-lightBlue 
      px-5 
      font-semibold
    `}
  }
`;
