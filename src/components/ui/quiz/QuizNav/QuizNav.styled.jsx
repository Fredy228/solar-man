import styled from 'styled-components';
import { ButtonOrg } from '../../../../common-style/ButtonCommon.styled';

export const QuizNavInner = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    gap: 15px;
  }
`;

export const QuizNavButton = styled(ButtonOrg)`
  padding: 14px 28px;
  font-size: 18px;
  border: 1px solid
    ${({ theme, colorBorder }) =>
      theme.color[colorBorder ? colorBorder : 'second']};

  color: ${({ theme, colorFont }) =>
    theme.color[colorFont ? colorFont : 'white']};

  :disabled {
    opacity: 0.8;
  }

  svg {
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
  }

  :not(:disabled):hover {
    color: ${({ theme, colorFontHover }) =>
      theme.color[colorFontHover ? colorFontHover : 'white']};

    svg {
      stroke: ${({ theme, colorSvgHover }) =>
        colorSvgHover ? theme.color[colorSvgHover] : theme.color.white};

      fill: ${({ theme, colorSvgHover }) =>
        colorSvgHover ? theme.color[colorSvgHover] : theme.color.white};
    }
  }

  @media screen and (max-width: 767px) {
    padding: 10px 20px;
  }
`;
