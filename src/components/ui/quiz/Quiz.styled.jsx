import styled from 'styled-components';
import { Container } from '../../../pages/Common.styled';

export const InnerQuiz = styled.div`
  background: radial-gradient(
    186.93% 102.34% at 81.46% 7.95%,
    #fff8de 0%,
    #dceeff 100%
  );
  //background: linear-gradient(
  //    rgba(255, 255, 255, 0.6),
  //    rgba(255, 255, 255, 0.6)
  //  ),
  //  url('/assets/bg_quiz.jpg');
  //background-repeat: no-repeat;
  //background-size: cover;
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-top: 70px;
  padding-bottom: 80px;

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
  padding-top: 70px;
`;

export const TitleQuiz = styled.h1`
  text-transform: uppercase;
  font-size: 38px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.main};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  margin-bottom: 32px;

  @media screen and (max-width: 999px) {
    font-size: 32px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 22px;
  }
`;
