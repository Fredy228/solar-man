import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.color.main};
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: inherit;
  margin-top: 10px;
  padding: 7px 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 350ms ease;
  font-size: 16px;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;
