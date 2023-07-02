import styled from 'styled-components';

export const InnerNotFound = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const NameErr = styled.h3`
  font-size: 35px;
  color: ${({ theme }) => theme.color.black};
  padding-bottom: 30px;

  @media screen and (max-width: 999px) {
    font-size: 25px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ImgNotFound = styled.img`
  max-width: 1000px;
  width: 100%;
  height: auto;
  display: block;
`;
