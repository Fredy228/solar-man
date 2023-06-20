import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  height: 100%;

  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
    height: auto;
    margin-bottom: 15px;
  }
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;

  :not(:last-child) {
    margin-right: 20px;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.color.second};
    }
  }

  svg {
    stroke: ${({ theme: { color } }) => color.g400};
    width: 25px;
    height: 25px;
    transition: stroke 350ms ease;
  }
`;
