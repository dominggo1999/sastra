import tw, { styled } from 'twin.macro';

const SectionTitle = styled.div`
  ${tw`
    flex 
    justify-center
    w-full
    font-spartan
    text-xl 
    text-primary 
    font-semibold
    mt-2
    mb-8
  `}

  ${({ spaceTop }) => spaceTop && tw`mt-8 md:mt-28`}
`;

export default SectionTitle;
