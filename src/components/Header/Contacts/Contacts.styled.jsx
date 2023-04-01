import styled from "styled-components";

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 300ms linear;
  position: relative;
  overflow: hidden;
  z-index: 99;

  :first-child {
    background-color: ${({ theme: { color } }) => color.second};
  }

  :last-child {
    background-color: ${({ theme: { color } }) => color.additional};
  }

  :before {
    content: '';
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    transition: width 750ms ease;
  }

  :hover:before {
    width: 100%;
  }

  svg {
    stroke: ${({ theme: { color } }) => color.white};
    margin-right: 5px;
    z-index: 101;

    @media screen and (min-width: 1000px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (min-width: 1200px) {
      width: 20px;
      height: 20px;
    }
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  z-index: 101;
  color: ${({ theme: { color } }) => color.white};

  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;