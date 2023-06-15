import styled from 'styled-components';

export const InnerProduct = styled.div`
  margin-top: 90px;
  padding: 20px 0;

  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 70px;
    padding: 0;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;

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

  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const CostProduct = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  :last-of-type {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const SpanColor = styled.span`
  color: ${({ theme }) => theme.color.second};
`;

export const WrapperDescrip = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 970px;
  margin: 15px auto;
  height: ${({ full, isOpen }) => (full && !isOpen ? '300px' : 'auto')};
  position: relative;
  overflow: hidden;

  p {
    text-indent: 20px;
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
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  cursor: pointer;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 80%
  );
`;

export const ListCharacter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const ItemCharacter = styled.li`
  background-color: ${({ theme }) => theme.color.main};
  padding: 20px;
  border-radius: 20px;

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

export const OptionTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.main};
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
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
    isWhite ? theme.color.white : theme.color.black};
  font-weight: ${({ isBold }) => (isBold ? '700' : '500')};
  line-height: 1.4;
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'left')};

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const WrapperShemaItems = styled.div`
  margin-bottom: 30px;
`;

export const ImgShema = styled.img`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const ItemElement = styled.li`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;

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

export const ElementImage = styled.img`
  max-width: 200px;
  width: 100%;
  margin: 0 auto 15px auto;
`;
