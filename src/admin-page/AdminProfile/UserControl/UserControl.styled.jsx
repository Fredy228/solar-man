import styled from 'styled-components';

export const ListUsers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

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
    max-width: 320px;
    width: 100%;
    margin: 0 auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / 2 - 30px);
  }
  @media screen and (min-width: 768px) {
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
