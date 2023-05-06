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
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};
  padding: 20px 30px;
`;

export const ImageBox = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    max-width: 500px;
    width: 100%;
  }
`;

export const Img = styled.img`
  display: block;
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
  text-align: center;
  margin-bottom: 20px;
  display: block;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.additional};
`;

export const Text = styled.p`
  margin-bottom: 5px;
  text-indent: 20px;
  font-size: 18px;
  line-height: 1.5;

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
