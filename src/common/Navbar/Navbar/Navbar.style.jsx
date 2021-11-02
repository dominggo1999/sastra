import tw, { styled } from 'twin.macro';

export const NavWrapper = styled.header`
  ${tw`
    w-full
    absolute
    top-0
    left-0 
    py-10
  `}
`;

export const Nav = styled.nav`
  ${tw`
    flex
    justify-between
    items-center 
  `}
`;

export const Links = styled.ul`
  ${tw`
    flex 
    items-center
    self-stretch
  `}
`;

export const MenuDot = styled.span`
  ${tw`
    h-5 
    w-5 
    flex
    items-center
    justify-center 
    cursor-pointer 
    relative
  `}
`;
