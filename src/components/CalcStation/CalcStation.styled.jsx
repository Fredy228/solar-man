import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';

export const StationInner = styled.div`
  padding: 50px 0;
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
`;

export const TitleSpan = styled.span`
  color: ${({ theme: { color } }) => color.second};
`;

export const SetctionText = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const SliderBox = styled.div`
  max-width: 700px;
  margin: 25px auto 0 auto;
  display: 'flex';
  justify-content: 'center';
  flex-wrap: 'wrap';
`;

export const SliderTriggerImg = styled(Icon)`
  width: 42px;
  height: 42px;
`;

export const OutputSlider = styled.output`
  margin-top: '30px';
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
`;

export const ItemResult = styled.li`
  padding: 5px 20px;
  background-color: ${({ theme: { color } }) => color.second};
  border-radius: 50px;
  text-align: center;
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
`;

export const Sun = styled.span``;
