import styled from 'styled-components';

export const Inner = styled.div`
  margin-top: 90px;

  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const TextAboutUs = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UnderTeam = styled.div`
  margin: -45px 0 60px 0;
`;
