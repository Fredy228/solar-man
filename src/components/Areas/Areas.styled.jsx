import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const WrapperTitle = styled.div`
  max-width: 300px;

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: initial;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  margin-bottom: 30px;
  padding-left: 30px;

  @media screen and (max-width: 999px) {
    width: calc(100% / 2);
    padding-left: 20px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;

    :nth-child(2n + 1) {
      padding-right: 15px;
    }
  }
`;

export const WrapperSvg = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.second};
  margin-right: 15px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
  flex: 1;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
