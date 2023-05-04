import styled, { keyframes } from 'styled-components';

const callAnim = keyframes`
    0% {
        transform: rotate(0);
    }
    10% {
        transform: rotate(30deg);
    }
    20% {
        transform: rotate(0);
        
    }
    100% {
        transform: rotate(0);
        
    }
`;

export const CallBox = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 25px;
  right: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.additional};
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
    stroke: ${({ theme }) => theme.color.white};
    fill: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${callAnim};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;

    @media screen and (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }

  :hover {
    transform: scale(1.1);
  }
`;
