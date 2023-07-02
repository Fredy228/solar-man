import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: ${({ theme, colorText }) =>
    theme.color[colorText ? colorText : 'main']};
  text-transform: uppercase;
  line-height: 1.3;
  font-size: 30px;
  text-align: ${({ text }) => (text ? text : 'center')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};

  @media screen and (max-width: 999px) {
    font-size: 25px;
  }
`;

export const SectionSubtitle = styled.p`
  color: ${({ theme, colorText }) =>
    theme.color[colorText ? colorText : 'g500']};
  font-size: 16px;
  text-align: ${({ text }) => (text ? text : 'center')};
  margin-top: 10px;
`;
