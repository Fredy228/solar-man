import styled from 'styled-components';
// import { Icon } from 'components/Icon/Icon';

export const StationInner = styled.div`
  padding: 50px 0;
  position: relative;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;

  :after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  color: ${({ theme: { color } }) => color.second};
`;

export const SetctionText = styled.p`
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SliderBox = styled.div`
  max-width: 700px;
  margin: 25px auto 0 auto;
  display: 'flex';
  justify-content: 'center';
  flex-wrap: 'wrap';
`;

// export const SliderTriggerImg = styled(Icon)`
//   width: 42px;
//   height: 42px;
// `;

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
  max-width: 500px;
  justify-content: space-between;

  @media screen and (max-width: 510px) {
    flex-direction: column;
    border-radius: 20px;
    padding: 10px 30px;
  }
`;

export const ItemResult = styled.li`
  padding: 5px 20px;
  background-color: ${({ theme: { color } }) => color.second};
  border-radius: 50px;
  text-align: center;

  @media screen and (max-width: 510px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
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
  transition: background-color 350ms ease;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 3px;
  }

  :hover {
    background-color: ${({ theme: { color } }) => color.second};
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
