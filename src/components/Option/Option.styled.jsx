import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const DescripBox = styled.div`
  flex: 1;
  margin-bottom: 50px;
`;

export const ImageBox = styled.div`
  width: 40%;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  right: -70px;
  bottom: -120px;
  width: 560px;

  @media screen and (max-width: 1200px) {
    width: 480px;
    right: -60px;
    bottom: -110px;
  }
`;

export const TitleMobile = styled.h1`
  display: none;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  color: ${({ theme }) => theme.color.main};
  line-height: 1.3;
  margin-bottom: 15px;
  z-index: 20;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.additional};
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  margin-right: 70px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
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
  margin: 20px auto 0 auto;
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
