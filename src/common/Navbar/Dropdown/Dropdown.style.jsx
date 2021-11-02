import tw, { styled } from 'twin.macro';

export const DropdownWrapper = styled.ul`
  ${tw`
    absolute 
    top-full 
    right-0
    bg-lightGray 
    p-4
  `}

  /* Reset margin */
  li {
    ${tw`
      m-0
      py-2
    `}
  }
`;
