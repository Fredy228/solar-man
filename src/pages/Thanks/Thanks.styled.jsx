import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 50px 0;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 22px;
  padding: 0 15px;
  color: ${({ theme }) => theme.color.g2};
  margin-bottom: 10px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 430px;
  width: 100%;
  padding: 0 15px;
  margin-top: 7px;
  margin-bottom: 30px;
`;
