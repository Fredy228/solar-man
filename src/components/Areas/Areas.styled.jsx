import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 4);
  padding-left: 15px;
  margin-bottom: 15px;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    fill: ${({ theme }) => theme.color.additionalV2};
  }

  @media screen and (max-width: 1200px) {
    width: calc(100% / 3);
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 2);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
`;
