import styled from 'styled-components';

export const WindowBox = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const WrapperBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 30px;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: color, background-color;

  :not(:last-child) {
    margin-right: 15px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    fill: ${({ theme }) => theme.color.white};
    transition: fill 350ms ease;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;
