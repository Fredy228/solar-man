import styled from 'styled-components';
import { ButtonOrg } from '../../CommonStyle/ButtonCommon.styled';

export const StationInner = styled.section`
  padding: 50px 0;
  position: relative;
  display: flex;

  @media screen and (max-width: 999px) {
    padding: 25px 0;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const WrapperTitle = styled.div``;

export const WrapperSlider = styled.div`
  flex: 1;
`;

export const SubTextSlider = styled.p`
  color: #6b7280;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    margin: 230px auto 0 auto;
    max-width: 200px;
  }
`;

export const SliderBox = styled.div`
  max-width: 700px;
  margin: 25px auto 0 auto;

  @media screen and (max-width: 1199px) {
    margin: 25px 50px 0 50px;
  }

  @media screen and (max-width: 767px) {
    margin: 25px 25px 0 25px;
  }
`;

export const OutputSlider = styled.output`
  font-weight: bold;
  position: absolute;
  display: block;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ widthValue }) => (widthValue ? widthValue : '85px')};
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
`;

export const StationImg = styled.img`
  margin: 0 auto;
  height: auto;
  width: 700px;
  bottom: 0;
  left: -200px;
  position: absolute;
  z-index: -1;

  @media screen and (max-width: 1199px) {
    width: 600px;
    left: -150px;
  }

  @media screen and (max-width: 767px) {
    top: 80px;
    width: 550px;
    right: 0;
    left: initial;
    transform: translateX(30px);
  }
`;

export const ListResult = styled.ul`
  display: flex;
  padding: 5px;
  margin: 80px auto 40px auto;
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 999px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    gap: 5px;
    margin-top: 60px;
  }
`;

export const ItemResult = styled.li`
  padding: 20px 20px;
  width: 180px;
  //height: 100px;
  background-color: ${({ theme: { color } }) => color.white};
  color: ${({ theme: { color } }) => color.g500};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;

  :first-child {
    background-color: ${({ theme: { color } }) => color.main};
    outline: 2px solid ${({ theme }) => theme.color.white};

    p {
      color: ${({ theme: { color } }) => color.white};
    }

    span {
      color: ${({ theme: { color } }) => color.second};
    }
  }

  span {
    color: ${({ theme }) => theme.color.main};
    font-size: 28px;
    font-weight: bold;
  }

  @media screen and (max-width: 1199px) {
    width: 150px;
    //height: 80px;
    padding: 15px 15px;

    span {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 767px) {
    flex: 1;
    min-width: 139px;
    height: 90px;
    padding: 5px 10px;
  }
`;

export const TextResult = styled.p`
  font-size: 16px;
  text-align: left;
  margin-bottom: 5px;

  @media screen and (max-width: 1199px) {
    font-size: 14px;
  }
`;

export const CalcInput = styled.input`
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: ${({ theme }) => theme.color.main};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 4px;
  outline: transparent;

  &:focus {
    border-color: ${({ theme }) => theme.color.second};
  }
`;

export const ButtonGetCall = styled(ButtonOrg)`
  margin: 0 auto;
`;
