import tw, { styled } from 'twin.macro';

export const Icon = styled.div`
  a{
    width: 50px;
    height: 50px;
    ${tw`
      flex 
      items-center
      justify-center
      text-2xl
      hover:text-lightBlue
      hover:bg-primary
      hover:rounded-full
      transition-all
      duration-200
      ease-in-out    
    `}
  }
`;
