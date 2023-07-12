import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  padding: 5px 15px;
  color: ${({ theme }) => theme.color.g2};
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-width: 512px;
  width: 100%;
  padding: 0 15px;
`;
