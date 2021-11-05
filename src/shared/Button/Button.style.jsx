import tw, { styled } from 'twin.macro';

export const Btn = styled.button`
  ${tw`
    font-spartan 
    text-primary
    relative
    bg-lightBlue
    py-4
    px-6
  `}

  &:hover {
    &:before {
      transform: translate(6px,6px);
    }
  }
  

  &:before {
    content : "";
    ${tw`
      absolute
      bg-primary
      w-full
      h-full
      top-0 
      left-0
    `}
    z-index: -1;
    transform: translate(0,0);
    transition: transform ease-in-out 200ms;
  }
`;
