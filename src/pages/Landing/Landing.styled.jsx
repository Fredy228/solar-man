import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px;
  position: fixed;
  top: ${p => (p.scroll > 70 ? 5 : 0)}px;
  left: ${p => (p.scroll > 70 ? 5 : 0)}px;
  z-index: 100;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${p => (p.scroll > 70 ? 20 : 0)}px;
  width: calc(100% - ${p => (p.scroll > 70 ? 10 : 0)}px);
  box-shadow: ${p =>
    p.scroll > 70
      ? ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      : 'none'};
  transition-timing-function: ease;
  transition-duration: 350ms;
  transition-property: top, border-radius, width, left, box-shadow;
`;

export const Main = styled.main`
  margin-top: ${p => p.heightHeader + 10}px;
`;

export const Intro = styled.section`
  width: 100%;
`;

export const CardsIntro = styled.div`
  display: flex;
  height: 420px;

  @media screen and (max-width: 1000px) {
    height: 335px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 430px;
    margin: 0 auto;
    height: 430px;
  }
`;

export const CardIntro = styled.div`
  margin: 3px;
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  transition: flex 350ms ease;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const IntroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const OverlayIntro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 40%
  );
  @media screen and (max-width: 768px) {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0) 60%
    );
  }
`;

export const NameCardIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px 5px;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme: { color } }) => color.white};
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    text-align: start;
  }
`;

export const TextOverlay = styled.p`
  color: ${({ theme: { color } }) => color.white};
  max-width: 180px;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    padding-left: 5px;
  }
`;
