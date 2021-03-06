import tw, { styled } from 'twin.macro';
import { gridSystem } from '../config';

const {
  breakpoints, containerWidths,
} = gridSystem;

export const ContainerStyle = styled.div`
  ${tw`
    mx-auto 
    relative
  `}

  padding-left: ${({ gutterWidth }) => `${gutterWidth / 2}px`};
  padding-right: ${({ gutterWidth }) => `${gutterWidth / 2}px`};

  /* sm size */
  max-width: ${containerWidths[0]}px;


  /* md */
  @media screen and (min-width:${breakpoints[1]}px){
    max-width: ${containerWidths[1]}px;
  }

  /* lg */
  @media screen and (min-width:${breakpoints[2]}px){
    max-width: ${containerWidths[2]}px;
  }

  /* xl */
  @media screen and (min-width:${breakpoints[3]}px){
    max-width: ${containerWidths[3]}px;
  }

  /* xxl */
  @media screen and (min-width:${breakpoints[4]}px){
    max-width: ${containerWidths[4]}px;
  }
`;
