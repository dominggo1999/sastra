import tw, { styled } from 'twin.macro';

export const SideLinkWrapper = styled.li`
  ${tw`
    text-xl 
    font-spartan
    text-primary
  `}

  a{
    ${tw`
      inline-block
      w-full 
      py-4 
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
