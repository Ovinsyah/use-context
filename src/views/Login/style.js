import Styled from 'styled-components';

export const LoginSection = Styled.div`
  overflow: hidden;
  min-height: 100vh;
  padding: 3rem;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;
export const SectionEmptyState = Styled.div`
  display: flex;
  justify-content: center;
  border-right: 2px solid #efefef;
  padding: 2rem 0;
  img{
    max-width: 480px;
  }
`;
export const FormSection = Styled.div`
  padding: 1rem 2rem;

  input{
    border-width: 0 0 1px 0;
    border-radius: 0;
  }
`;
export const Label = Styled.label`
  display: block;
  font-weight: 500;
  color: #373737;
`