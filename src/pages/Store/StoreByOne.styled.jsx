import styled from 'styled-components';

export const InnerProduct = styled.div`
  margin-top: 90px;
  padding: 20px 0;

  @media screen and (max-width: 999px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 70px;
    padding: 0;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const NameBox = styled.div`
  flex: 1;
  padding-left: 20px;

  button {
    @media screen and (max-width: 767px) {
      margin: 0 auto 15px auto;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
  }
`;

export const ImgProduct = styled.img`
  max-width: 350px;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
`;

export const TitleProduct = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.color.main};
  margin-bottom: 30px;

  @media screen and (max-width: 999px) {
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const CostProduct = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.g2};

  font-size: 20px;
  margin-bottom: 15px;
  :last-of-type {
    margin-bottom: 30px;
  }

  :first-of-type {
    margin-top: 30px;
  }

  @media screen and (max-width: 999px) {
    font-size: 18px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.second};
    margin-right: 7px;
  }
`;

export const PdfFileLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  margin-top: 30px;
  font-family: inherit;
  font-weight: inherit;
  color: ${({ theme }) => theme.color.g2};

  :hover {
    text-decoration: underline;
  }
`;

export const PdfFileIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

export const WrapperDescrip = styled.div`
  margin: 15px auto 30px auto;
  border-radius: 10px;
  height: ${({ full, isOpen }) => (full && !isOpen ? '300px' : 'auto')};
  position: relative;
  overflow: hidden;

  p {
    margin-top: 20px;
  }
`;

export const SpanDesrip = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.main};
  width: 200px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

export const ListCharacter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const ItemCharacter = styled.li`
  padding: 20px;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    max-width: 420px;
    width: 100%;
    margin-bottom: 15px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin: calc(20px / 2);
    flex-basis: calc(100% / 2 - 20px);
  }
`;

export const OptionList = styled.ul`
  list-style: initial;
  margin-left: 20px;
  margin-top: 10px;
  color: ${({ theme, isWhite }) =>
    isWhite ? theme.color.white : theme.color.black};
`;

export const OptionItem = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const OptionText = styled.p`
  font-size: 18px;
  color: ${({ theme, isWhite }) =>
    isWhite ? theme.color.white : theme.color.g2};
  font-weight: ${({ isBold }) => (isBold ? '700' : '500')};
  line-height: 1.4;
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'left')};

  @media screen and (max-width: 999px) {
    font-size: 16px;
    text-align: left;
  }
`;

export const WrapperShemaItems = styled.div`
  margin-bottom: 40px;
`;

export const ImgShema = styled.img`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 100%;
  height: auto;
  margin: 20px auto;
`;

export const ItemElement = styled.li`
  display: flex;
  justify-content: start;
  align-items: start;

  @media screen and (max-width: 767px) {
    max-width: 420px;
    width: 100%;
    margin-bottom: 30px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin: calc(20px / 2);
    flex-basis: calc(100% / 2 - 20px);
  }

  @media screen and (max-width: 999px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ElementImage = styled.img`
  width: 150px;
  margin-right: 10px;

  @media screen and (max-width: 999px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;

export const WrapperOptionEl = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;

  p {
    @media screen and (max-width: 999px) {
      width: 100%;
    }
  }
`;

export const VideoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const VideoItem = styled.li`
  width: 50%;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 315px;
  border-radius: 10px;

  @media screen and (max-width: 999px) {
    height: 215px;
  }
`;

export const DescripImgList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const DescripImgItem = styled.li`
  max-width: 1000px;
  width: 100%;
`;

export const DescripImg = styled.img`
  width: 100%;
`;
