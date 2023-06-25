import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
`;

export const WrapperTitle = styled.div`
  max-width: 300px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  //margin-left: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  margin-bottom: 30px;
  padding-left: 30px;
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
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
`;
