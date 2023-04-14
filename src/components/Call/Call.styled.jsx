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
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.additional};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  svg {
    width: 40px;
    height: 40px;
    stroke: ${({ theme }) => theme.color.white};
    fill: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: ${callAnim};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    transform: translate(-7px, -7px);

    @media screen and (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;
