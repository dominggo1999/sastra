import tw, { styled } from 'twin.macro';

const Section = styled.section`
  ${tw`
    py-8
    w-full
  `}
`;

export const Article = styled.article`
  ${tw`
    py-8
    w-full
    overflow-hidden
  `}
`;

export default Section;
