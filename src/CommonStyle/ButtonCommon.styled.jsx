import styled from 'styled-components';

export const ButtonOrg = styled.button`
  font-family: inherit;
  font-weight: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, colorBg }) =>
    colorBg ? theme.color[colorBg] : theme.color.second};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 350ms;

  svg {
    stroke: ${({ theme, colorSvg }) =>
      colorSvg ? theme.color[colorSvg] : theme.color.white};

    fill: ${({ theme, colorSvg }) =>
      colorSvg ? theme.color[colorSvg] : theme.color.white};

    width: 20px;
    height: 20px;
    margin-right: 5px;
    transition-property: stroke, fill;
    transition-duration: 350ms;
    transition-timing-function: ease;
  }

  :not(:disabled):hover {
    background-color: ${({ theme, colorBgHover }) =>
      colorBgHover ? theme.color[colorBgHover] : theme.color.main};
  }
`;
