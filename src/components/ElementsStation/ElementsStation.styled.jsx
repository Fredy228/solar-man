import styled from 'styled-components';

export const Inner = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0;
  :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.color.second};
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  padding-left: 10px;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  line-height: 1.5;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 120px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;
