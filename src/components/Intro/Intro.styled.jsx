import styled from 'styled-components';

export const IntroBox = styled.section`
  width: 100%;
  position: relative;
`;

export const IntroBox2 = styled(IntroBox)``;

export const IntroInner = styled.div`
  padding-bottom: 100px;
  padding-top: 50px;

  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: 700px;
  background-position: bottom -320px right 0;

  @media screen and (max-width: 1199px) {
    background-size: 500px;
    background-position: bottom -180px right 0;
    padding-bottom: 80px;
    padding-top: 0;
  }

  @media screen and (max-width: 999px) {
    background-size: 400px;
    background-position: bottom -120px right 0;
  }

  @media screen and (max-width: 767px) {
    background-size: 300px;
    background-position: bottom -120px right 0;
  }
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
  padding-top: 120px;
  font-size: 40px;
  color: ${({ theme }) => theme.color.main};
  line-height: 1.3;
  margin-bottom: 10px;
  z-index: 20;

  @media screen and (max-width: 999px) {
    font-size: 30px;
    padding-top: 100px;
  }

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

export const IntroTitleSpan = styled.span`
  color: ${({ theme }) => theme.color.second};
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
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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

export const BtnOverlay = styled.div`
  background-color: ${({ theme: { color } }) => color.second};
  color: ${({ theme: { color } }) => color.white};
  font-size: 16px;
  padding: 10px 30px;
  margin: 0 auto 20px auto;
  border-radius: 30px;

  @media screen and (min-width: 768px) and (max-width: 999px) {
    font-size: 14px;
    padding: 7px 20px;
  }
`;

export const BlockDiscount = styled.div`
  background-color: #ffffff;
  padding: 28px 50px;
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;

  @media screen and (max-width: 1199px) {
    padding: 25px 35px;
    margin-top: 20px;
  }

  @media screen and (max-width: 999px) {
    font-size: 18px;
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 15px 25px;
  }
`;

export const DiscountSmallText = styled.p`
  font-size: 24px;
  color: ${({ theme: { color } }) => color.g2};
  line-height: 1.5;
  font-weight: 600;

  @media screen and (max-width: 1199px) {
    font-size: 20px;
  }

  @media screen and (max-width: 999px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const DiscountBigText = styled.p`
  font-size: 38px;
  line-height: 1.3;
  color: ${({ theme: { color } }) => color.second};
  font-weight: 700;

  @media screen and (max-width: 1199px) {
    font-size: 32px;
  }

  @media screen and (max-width: 999px) {
    font-size: 25px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;
