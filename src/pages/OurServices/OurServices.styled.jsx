import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: ${({ paddBott }) => (paddBott ? paddBott : '60px')};
  padding-top: ${({ paddTop }) => (paddTop ? paddTop : '60px')};
  margin-bottom: ${({ margBott }) => (margBott ? margBott : '0')};

  background-color: ${({ theme, color }) =>
    color ? theme.color.main : theme.color.white};
  overflow-x: ${({ overX }) => (overX ? overX : 'initial')};

  :first-of-type {
    background: ${({ isGradient }) =>
      isGradient
        ? 'radial-gradient(186.93% 102.34% at 81.46% 7.95%, #fff8de 0%, #dceeff 100%)'
        : 'initial'};
    padding-top: 120px;
    padding-bottom: 0;
    overflow: hidden;
  }
`;
