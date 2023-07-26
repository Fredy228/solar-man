import styled from 'styled-components';

export const IntroBox = styled.section`
  width: 100%;
  position: relative;
`;

export const EllipseBg = styled.div`
  position: absolute;
  width: 2200px;
  height: 1000px;
  top: -572px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    92.05% 162.69% at 81.46% 7.95%,
    #fff8de 0%,
    #dceeff 100%
  );
  z-index: -1;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 999px) {
    top: -600px;
  }
`;

export const EllipseBox = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

export const ImgEllipse = styled.img`
  width: 500px;
  height: auto;
  position: absolute;
  right: 0;
  bottom: -50px;

  @media screen and (max-width: 999px) {
    width: 450px;
    right: 150px;
  }

  @media screen and (max-width: 767px) {
    width: 400px;
    right: 280px;
  }
`;

export const IntroTitle = styled.h1`
  text-transform: uppercase;
  margin-top: 120px;
  font-size: 40px;
  color: ${({ theme }) => theme.color.main};
  line-height: 1.3;
  margin-bottom: 10px;
  z-index: 20;

  @media screen and (max-width: 999px) {
    font-size: 30px;
    margin-top: 100px;
  }

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

export const IntroText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.g2};
  max-width: 470px;
  line-height: 1.5;
  z-index: 20;
  margin-bottom: 80px;

  @media screen and (max-width: 999px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    max-width: 200px;
  }
`;

export const CardsIntro = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 5px;
  z-index: 20;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CardIntro = styled.div`
  position: relative;
  border-radius: 10px;
  flex: 1;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 2px solid transparent;
  transition: outline-color 350ms ease;
  background-image: url(${({ srcImg }) => srcImg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 180px;

  :hover {
    outline-color: ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 1199px) {
    height: 240px;
  }

  @media screen and (max-width: 999px) {
    height: 180px;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const OverlayIntroIco = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};
  transition: background-color 350ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme: { color } }) => color.white};
    stroke: ${({ theme: { color } }) => color.white};

    width: 35px;
    height: 35px;
  }
`;

export const OverlayIntro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(22, 73, 138, 0) 30%,
    rgba(14, 57, 112, 0.95) 100%
  );

  :hover {
    ${OverlayIntroIco} {
      background-color: ${({ theme }) => theme.color.second};
    }
  }
`;

export const TextOverlay = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 999px) {
    font-size: 16px;
  }
`;
