import styled from 'styled-components';
import { NavLinkWithUtm } from 'components/nav-link-with-utm/NavLinkWithUtm';

export const ListProduts = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const TitleProduts = styled.p`
  margin-bottom: 20px;
  padding: 0 10px;
  color: ${({ theme }) => theme.color.g2};
  transition: color 350ms ease;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const ItemProduts = styled.li`
  position: relative;

  overflow: hidden;
  cursor: pointer;

  :hover ${TitleProduts} {
    color: ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin-bottom: 15px;
    align-items: center;
  }

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

export const ItemProdutsLink = styled(NavLinkWithUtm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const WrapperImgProducts = styled.div`
  width: 100%;
  height: 320px;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

export const ImgProduts = styled.img`
  width: 100%;
`;

export const PowerSpan = styled.span`
  font-size: 14px;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin: 15px auto 0 auto;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 1199px) and (min-width: 767px) {
    font-size: 12px;
    width: 70px;
    height: 25px;
  }
`;

export const CostProduts = styled.button`
  color: ${({ theme }) => theme.color.g2};
  padding: 7px 20px;
  margin-bottom: 15px;
  margin-top: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 18px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 7px;
    fill: ${({ theme }) => theme.color.second};
    transition: stroke 350ms ease;
  }
`;

export const BoxBtnProducts = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonProducts = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.additional};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.main};
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
  }
`;

export const NotFoundText = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
