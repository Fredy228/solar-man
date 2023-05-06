import styled from 'styled-components';

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  color: ${({ color, theme }) =>
    color ? theme.color.white : theme.color.black};

  :after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: ${({ color, theme }) =>
      color ? theme.color.white : theme.color.second};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  color: ${({ theme: { color } }) => color.second};
`;

export const SetctionText = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${({ color, theme }) => (color ? color : theme.color.black)};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
