import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 90px;
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
