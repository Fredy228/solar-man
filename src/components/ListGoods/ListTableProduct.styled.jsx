import styled from 'styled-components';

export const ListProduts = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemProduts = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (min-width: 768px) {
    margin: calc(20px / 2);
    flex-basis: calc(100% / ${({ flex }) => flex[0]} - 20px);
  }

  @media screen and (min-width: 1000px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / ${({ flex }) => flex[1]} - 30px);
  }

  @media screen and (min-width: 1200px) {
    margin: calc(30px / 2);
    flex-basis: calc(100% / ${({ flex }) => flex[2]} - 30px);
  }
`;

export const ImgProduts = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const TitleProduts = styled.a`
  font-weight: bold;
  margin-bottom: 15px;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const CostProduts = styled.p`
  color: ${({ theme }) => theme.color.white};
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.color.additional};
  border-radius: 25px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;

export const ButtonProduts = styled.button``;
