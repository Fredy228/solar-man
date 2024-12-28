import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`;

export const Item = styled.li`
  display: flex;
  width: calc((100% / 2) - 15px);
  margin-bottom: 20px;

  @media screen and (max-width: 999px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Info = styled.div`
  padding-left: 10px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.g2};

  @media screen and (max-width: 999px) {
    font-size: 22px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: 16px;
  color: ${({ theme }) => theme.color.g1};
`;

export const Img = styled.img`
  width: 180px;

  @media screen and (max-width: 999px) {
    width: 110px;
  }
`;

export const LastItem = styled.div`
  padding: 50px;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
`;
