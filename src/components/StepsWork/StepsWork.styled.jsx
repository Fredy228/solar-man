import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 20px auto 0 auto;
  }
`;

export const NumStepBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.second};
  position: relative;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
    z-index: 1;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  position: relative;

  @media screen and (min-width: 768px) {
    :after {
      content: '';
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.color.second};
      position: absolute;
      top: 39px;
      transform: translateY(-50%);
      left: 0;
    }

    :first-child {
      :after {
        width: 50%;
        right: 0;
        left: initial;
      }
    }

    :last-child {
      :after {
        width: 50%;
        left: 0;
      }
    }

    :nth-child(3):not(:last-child):not(:first-child) {
      :after {
        width: ${({ isRows }) => (isRows ? '100vw' : '100%')};
      }
    }

    :nth-child(4) {
      :after {
        width: ${({ isRows }) => (isRows ? '100vw' : '100%')};
        right: ${({ isRows }) => (isRows ? '0' : 'initial')};
        left: ${({ isRows }) => (isRows ? 'initial' : '0')};
      }
    }
  }

  @media screen and (max-width: 999px) and (min-width: 768px) {
    :nth-child(2) {
      :after {
        width: 100vw;
      }
    }

    :nth-child(5) {
      :after {
        width: 100vw;
        right: 0;
        left: initial;
      }
    }

    :last-child {
      :after {
        width: 100vw;
        right: 50%;
        left: initial;
      }
    }
  }

  :last-child ${NumStepBox} {
    box-shadow: 0 0 50px 0 #fc7300;
  }

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto calc(30px / 2) auto;
  }

  @media screen and (min-width: 768px) {
    padding: 15px 15px 30px 15px;
    flex-basis: calc(100% / 2);
  }

  @media screen and (min-width: 1000px) {
    padding: 15px 15px 30px 15px;
    flex-basis: calc(100% / 3);
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.g900};
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.color.g500};

  @media screen and (max-width: 1119px) {
    font-size: 16px;
  }
`;
