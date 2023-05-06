import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 25px;
  padding-top: 25px;
  background-color: ${({ theme, color }) =>
    color ? theme.color.main : theme.color.white};

  :first-of-type {
    margin-top: 90px;
    @media screen and (max-width: 1000px) {
      margin-top: 80px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 70px;
    }
  }
`;
