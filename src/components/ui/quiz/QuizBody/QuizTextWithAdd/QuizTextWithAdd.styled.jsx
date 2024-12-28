import styled from 'styled-components';

export const QuizCountryInput = styled.input`
  font-size: 16px;
  outline-color: ${({ theme }) => theme.color.g400};
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;

  @media screen and (max-width: 767px) {
    margin-left: 15px;
    width: calc(100% - 20px);
    margin-top: 0;
  }
`;
