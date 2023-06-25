import styled from 'styled-components';

export const InnerConsult = styled.div`
  width: 100%;
  position: relative;
  margin-top: 70px;
`;

export const WrapperOverHidden = styled.div`
  padding: 70px 0;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
`;

export const WrapperText = styled.div`
  width: 53%;

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

export const WrapperImgPos = styled.div`
  width: 47%;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ArrowConsult = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const ImgConsult = styled.img`
  position: absolute;
  top: -200px;
  left: -80px;
  width: 580px;

  @media screen and (max-width: 1200px) {
    top: -150px;
    left: -200px;
  }

  @media screen and (max-width: 1000px) {
    left: -300px;
  }

  @media screen and (max-width: 767px) {
    width: 450px;
    left: 50%;
    top: -230px;
    transform: translateX(-50%);
  }
`;

export const ConsultText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
  margin-bottom: 30px;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 767px) {
  }
`;
