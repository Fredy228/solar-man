import styled from 'styled-components';

export const ToTopBox = styled.div`
  position: fixed;
  z-index: 20;
  bottom: 100px;
  left: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.second};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: transform 350ms ease;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.color.white};
    transform: rotate(180deg);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }

  :hover {
    transform: scale(1.1);
  }
`;
