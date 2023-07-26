import styled from 'styled-components';
import { Container } from '../Common.styled';

export const InnerQuiz = styled.div`
  background: radial-gradient(
    186.93% 102.34% at 81.46% 7.95%,
    #fff8de 0%,
    #dceeff 100%
  );
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-top: 150px;
  padding-bottom: 50px;

  @media screen and (max-width: 767px) {
    background: radial-gradient(
      374.96% 191.73% at 277.2% 1.34%,
      #fff8de 0%,
      #dceeff 100%
    );
    padding-top: 100px;
  }
`;

export const WrapperQuiz = styled(Container)`
  height: auto;
`;

export const TitleQuiz = styled.h1`
  text-transform: uppercase;
  font-size: 38px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.main};
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 999px) {
    font-size: 32px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 22px;
  }
`;
