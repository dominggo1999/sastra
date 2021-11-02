import tw, { styled } from 'twin.macro';

export const LinkWrapper = styled.li`
  ${tw`
    list-none
    font-spartan 
    text-sm
    text-primary
    font-bold 
    ml-8
    select-none
    cursor-pointer
  `}

  svg {
    ${tw`
      text-2xl
    `}
  }

  button {
    ${tw`
      bg-lightBlue 
      py-2
      px-3 
      font-semibold
      relative
    `}

    font-size: 12px;
  }
`;
