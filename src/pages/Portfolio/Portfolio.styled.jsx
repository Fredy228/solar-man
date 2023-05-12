import styled from 'styled-components';

export const Inner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxControl = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const ControlBtn = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  transition: background-color 350ms ease;
  :first-child {
    background-color: ${({ theme }) => theme.color.additional};
  }

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const List = styled.ul`
  border-radius: 20px;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const Item = styled.li`
  border-radius: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 10px 0;
  }
`;

export const ItemText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ItemItem = styled.li`
  :not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const BoxInfo = styled.div`
  padding-left: 15px;
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;

export const ItemImg = styled.img`
  width: 125px;
  border-radius: 10px;
`;

export const BoxBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 10px;
  }
`;

export const ItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: color, background-color;

  :not(:last-child) {
    margin-bottom: 15px;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
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
