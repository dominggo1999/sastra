import tw, { styled } from 'twin.macro';

export const FormStyle = styled.form`
  ${tw`
    flex 
    flex-col
  `}

  label {
    ${tw`
      font-scPro 
      text-sm
      mb-2
    `}
  }

  input{
    ${tw`
      bg-[#F1F1F1]
      py-4
      px-4 
      font-spartan
      text-primary
      font-semibold 
      outline-none
      mb-6
    `}
  }

  textarea{
    min-height: 150px;
    max-height: 300px;

    ${tw`
      bg-[#F1F1F1]
      py-4
      px-4 
      font-spartan
      text-primary
      font-semibold 
      outline-none
      mb-6
    `}
  }
`;
