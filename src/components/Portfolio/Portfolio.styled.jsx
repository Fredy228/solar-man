import styled from 'styled-components';

export const PortfolioInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const PortfolioOverLay = styled.div`
  position: absolute;
  padding: 15px;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  transform: translateY(120%);
  transition: transform 350ms ease;
  color: ${({ theme }) => theme.color.white};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9) 40%
  );
`;

export const PortfolioItem = styled.li`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  &:hover ${PortfolioOverLay} {
    transform: translateY(0);
  }

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

export const PortfolioImg = styled.img`
  width: 100%;
`;

export const TitleOverLay = styled.h4`
  text-align: center;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const SpanOverLay = styled.span`
  width: 100%;
  text-align: right;
  display: block;
  font-style: italic;
  font-size: 16px;
  position: relative;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: calc(100% - 50px);
    height: 3px;
    background-color: ${({ theme: { color } }) => color.second};
  }
`;

export const ListOverLay = styled.ul`
  list-style: initial;
  margin-left: 15px;
  margin: 5px 0 0 15px;
`;

export const TextOverLay = styled.li`
  font-size: 16px;
  margin-bottom: 5px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const NavBtn = styled.button`
  font-size: 16px;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ color, theme }) =>
    color ? theme.color.main : 'transparent'};
  border: 2px solid
    ${({ theme, color }) => (color ? theme.color.main : theme.color.additional)};
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  transition-property: background-color, border-color;
  transition-duration: 350ms;
  transition-timing-function: ease;
  margin-top: 15px;
  font-family: inherit;
  font-weight: inherit;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
    border-color: ${({ theme }) => theme.color.additional};
  }
`;
