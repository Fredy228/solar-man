import styled from 'styled-components';

export const WrapperContactsQuiz = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 auto 0 auto;
  max-width: 800px;
  padding: 40px 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    padding: 10px 0 0 0;
    margin-bottom: -15px;
  }
`;
