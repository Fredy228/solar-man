import styled from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ListNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 10px;
  padding: 10px;
`;
export const ItemNav = styled.li`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Select = styled.select`
  width: 170px;
  height: 25px;
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.additional};
  font-family: inherit;
  font-weight: inherit;
  font-size: 14px;
  border-color: transparent;
  cursor: pointer;
  outline: transparent;
  transition: border-color 350ms ease;

  :hover,
  :focus {
    border-color: ${({ theme }) => theme.color.white};
  }
`;

export const Option = styled.option``;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin-right: 10px;
  @media screen and (max-width: 1119px) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width: 170px;
  height: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: background-color, color;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const OrderBtn = styled(Button)`
  position: fixed;
  top: 200px;
  left: -70px;
  rotate: 90deg;
  border: 1px solid ${({ theme }) => theme.color.additional};
`;
