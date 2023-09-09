import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 380px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1280px;
  }

  @media screen and (max-width: 767px) {
    overflow-x: ${({ flowOver }) => (flowOver ? 'hidden' : 'initial')};
  }
`;

export const Frontier = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow-x: ${({ hiddenX }) => (hiddenX ? 'hidden' : 'initial')};
  overflow-y: ${({ hiddenY }) => (hiddenY ? 'hidden' : 'initial')};

  background: ${({ color, theme }) => {
    switch (color) {
      case 'main':
        return theme.color.main;
      case 'grad':
        return 'radial-gradient(186.93% 102.34% at 81.46% 7.95%, #FFF8DE 0%, #DCEEFF 100%)';
      case 'second':
        return theme.color.second;
      default:
        return 'transparent';
    }
  }};
`;
