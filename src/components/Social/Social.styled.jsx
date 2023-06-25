import styled from 'styled-components';

export const SocialBox = styled.div``;

export const SociaLink = styled.a`
  :not(:last-child) {
    margin-right: 10px;
  }

  svg {
    fill: ${({ color, theme }) => (color ? color : theme.color.main)};
    width: 25px;
    height: 25px;
    transition-duration: 250ms;
    transition-property: scale, fill, background-color;
    transition-timing-function: ease;

    :hover {
      scale: 1.1;
    }
  }

  :hover:nth-child(3) svg {
    fill: #40b3e0;
  }
  :hover:nth-child(2) svg {
    fill: #c13584;
  }
  :hover:nth-child(1) svg {
    fill: #3b5998;
  }
  :hover:nth-child(4) svg {
    fill: #ff0000;
  }
`;
