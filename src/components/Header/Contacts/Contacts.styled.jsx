import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  height: 100%;

  @media screen and (max-width: 999px) {
    justify-content: center;
    height: auto;
    flex-wrap: wrap;
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

    @media screen and (max-width: 767px) {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 999px) {
    width: ${({ showBurger }) => (showBurger ? '100%' : 'initial')};
    margin-bottom: ${({ showBurger }) => (showBurger ? '30px' : '0')};
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 350ms ease;

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

  @media screen and (max-width: 999px) {
    background-color: ${({ theme }) => theme.color.white};
    padding: 7px;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.color.second};

      svg {
        stroke: ${({ theme: { color } }) => color.white};
      }
    }
  }

  @media screen and (max-width: 767px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BoxLang = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;

  @media screen and (max-width: 999px) {
    margin-right: 0;
    margin-bottom: 15px;
    flex-direction: row;
    gap: 10px;
  }
`;

export const SpanLang = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.second};
`;

export const BtnLang = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px;
  transition: color 350ms ease;

  color: ${({ theme, active }) =>
    active ? theme.color.second : theme.color.g900};

  &:hover {
    color: ${({ theme }) => theme.color.second};
  }
`;
