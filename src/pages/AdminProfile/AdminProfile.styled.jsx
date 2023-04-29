import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.color.main};
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const ListInfo = styled.ul`
  max-width: 500px;
  margin: 20px auto;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
`;

export const ItemInfo = styled.li`
  margin-bottom: 5px;
  padding: 5px 15px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 350ms ease;
  cursor: default;
  :hover {
    background-color: ${({ theme }) => theme.color.second};
  }
`;

export const ItemText = styled.p`
  font-size: 18px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const EditBtn = styled.button`
  margin-left: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.additional};

  :hover {
    background-color: #fc7100dc;
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${({ theme }) => theme.color.white};
  }
`;

export const ListUsers = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 15px auto 0 auto;
  }
`;

export const ItemUsers = styled.li`
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  font-size: 18px;
  position: relative;
  height: 240px;

  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin: 0 auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 3 - 30px);
  }
`;

export const ListUser = styled.ul``;

export const ItemUser = styled.li`
  margin-bottom: 10px;

  :last-child {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
  }
`;

export const TextUser = styled.p`
  text-overflow: ellipsis;
`;

export const SpanUser = styled.span`
  font-weight: bold;
  font-style: italic;
`;

export const Select = styled.select`
  font-size: 16px;
  font-family: inherit;
  padding: 3px 10px;
  border-radius: 15px;
`;

export const Option = styled.option``;

export const BtnUser = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 30px;
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
