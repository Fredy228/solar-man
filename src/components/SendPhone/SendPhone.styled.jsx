import styled from 'styled-components';

export const Inner = styled.div`
  background-image: linear-gradient(to right, #00425a, #5f9ea0);
  padding: 20px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  font-size: 16px;
`;

export const Text = styled.p`
  font-weight: bold;
`;

export const Span = styled.a`
  color: inherit;
  text-decoration: underline;
  font-weight: 500;
`;

export const TextAdd = styled.p`
  font-style: italic;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 20px auto 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.additional};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-family: inherit;

  transition: background-color 350ms ease;
  :hover {
    background-color: #fc7100d1;
  }
`;
