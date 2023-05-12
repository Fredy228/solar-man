import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  padding: 5px 15px;
  background-color: #fc7300;
  color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
`;
