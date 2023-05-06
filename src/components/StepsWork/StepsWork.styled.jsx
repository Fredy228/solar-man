import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 767px) {
    max-width: 320px;
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

export const NumStepBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 70px;
    height: 70px;
    fill: ${({ theme }) => theme.color.white};

    @media screen and (max-width: 1200px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const NumStep = styled.span`
  font-size: 70px;
  margin-right: 10px;

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;
