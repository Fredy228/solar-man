import styled from 'styled-components';

export const StationInner = styled.section`
  padding: 50px 0;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const SliderBox = styled.div`
  max-width: 700px;
  margin: 25px auto 0 auto;
  display: 'flex';
  justify-content: 'center';
  flex-wrap: 'wrap';
  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const OutputSlider = styled.output`
  margin-top: 30px;
  font-weight: bold;
`;

export const StationImg = styled.img`
  margin: 0 auto;
  height: auto;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;

export const ListResult = styled.ul`
  display: flex;
  background-color: ${({ theme: { color } }) => color.main};
  padding: 5px;
  border-radius: 50px;
  margin: 20px auto;
  max-width: 700px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    border-radius: 20px;
    justify-content: center;
    max-width: 500px;
    padding: 10px 30px 0 30px;
    gap: 10px;
  }
`;

export const ItemResult = styled.li`
  padding: 5px 20px;
  background-color: ${({ theme: { color } }) => color.second};
  border-radius: 50px;
  text-align: center;

  @media screen and (max-width: 768px) {
    min-width: 180px;
    margin-bottom: 10px;
  }
`;

export const TextResult = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: 16px;
`;

export const ButtonGetCall = styled.button`
  border: none;
  background-color: ${({ theme: { color } }) => color.additional};
  color: ${({ theme: { color } }) => color.white};
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 50px;
  font-size: 18px;
  font-family: inherit;
  cursor: pointer;
  margin: 0 auto;
  transition-property: background-color, color;
  transition-duration: 350ms;
  transition-timing-function: ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 3px;
    stroke: transparent;
    transition: stroke 350ms ease;
  }

  :hover {
    background-color: ${({ theme: { color } }) => color.additionalV2};
    color: ${({ theme: { color } }) => color.black};
  }
  :hover svg {
    stroke: ${({ theme: { color } }) => color.black};
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Sun = styled.span`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fc710064;
  top: 50px;
  left: 10px;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 100px;
    left: -50px;
  }

  @media screen and (max-width: 510px) {
    display: none;
  }

  :before,
  :after {
    content: '';
    background-color: #fc710064;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :before {
    width: 150px;
    height: 150px;

    @media screen and (max-width: 1000px) {
      width: 130px;
      height: 130px;
    }
  }

  :after {
    width: 70px;
    height: 70px;

    @media screen and (max-width: 1000px) {
      width: 50px;
      height: 50px;
    }
  }
`;
