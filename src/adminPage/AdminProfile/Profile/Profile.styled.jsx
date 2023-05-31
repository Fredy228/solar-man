import styled from 'styled-components';

export const ListInfo = styled.ul`
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
`;

export const ItemInfo = styled.li`
  margin-bottom: 5px;
  padding: 5px 15px 15px 15px;

  display: flex;
  align-items: center;
  cursor: default;
  flex-wrap: wrap;
  justify-content: center;

  :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.color.second};
  }
  @media screen and (max-width: 380px) {
  }
`;

export const ItemText = styled.p`
  font-size: 18px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  font-style: italic;
  height: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  text-align: center;
  height: 30px;
  font-size: 16px;
  font-family: inherit;
  font-weight: inherit;
  border-radius: 15px;
  padding: 0 15px;
  outline: none;
  max-width: 300px;
  width: 100%;
  border: 2px solid transparent;
  transition: border-color 350ms ease;

  :focus,
  :hover {
    border-color: ${({ theme }) => theme.color.additional};
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 30px;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: color, background-color;

  :not(:last-child) {
    margin-right: 15px;
  }

  :disabled {
    opacity: 0.7;
  }

  :disabled:hover {
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    fill: ${({ theme }) => theme.color.black};
    transition: fill 350ms ease;
  }

  :not(:disabled):hover {
    background-color: ${({ theme }) => theme.color.additional};
    color: ${({ theme }) => theme.color.white};
  }
  :not(:disabled):hover svg {
    fill: ${({ theme }) => theme.color.white};
  }
`;

export const LogoutBtn = styled.button`
  font-family: inherit;
  font-weight: inherit;
  padding: 7px 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 350ms ease;
  font-size: 16px;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;
