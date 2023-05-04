import styled from 'styled-components';

export const SocialBox = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
`;

export const SociaLink = styled.a`
  :not(:last-child) {
    margin-right: 10px;
  }

  svg {
    fill: ${({ color, theme }) => (color ? color : theme.color.main)};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid transparent;
    transition-duration: 250ms;
    transition-property: scale, fill, background-color, border-color;
    transition-timing-function: ease;

    :hover {
      scale: 1.1;
      background-color: ${({ theme }) => theme.color.white};
      border-color: ${({ theme }) => theme.color.white};
    }
  }

  :hover:nth-child(1) svg {
    fill: #40b3e0;
  }
  :hover:nth-child(2) svg {
    fill: #c13584;
  }
  :hover:nth-child(3) svg {
    fill: #3b5998;
  }
  :hover:nth-child(4) svg {
    fill: #ff0000;
  }
`;
