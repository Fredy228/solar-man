import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1280px;
  }
`;

export const Frontier = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'main':
        return theme.color.main;
      case 'second':
        return theme.color.second;
      default:
        return theme.color.white;
    }
  }};
`;
