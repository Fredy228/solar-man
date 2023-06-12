import styled from 'styled-components';
import { IMaskInput } from 'react-imask';

export const Inner = styled.div`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.color.main},
    ${({ theme }) => theme.color.second}
  );
  padding: 20px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  font-size: 16px;
  max-width: 460px;
  width: 100%;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : '500')};
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.6;
`;

export const Span = styled.a`
  color: inherit;
  text-decoration: underline;
  font-weight: 500;
`;

export const TextAdd = styled.p`
  font-style: italic;
  margin-top: 10px;
  font-size: 16px;
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
  font-size: 18px;
`;

export const PhoneInput = styled(IMaskInput)`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  width: 100%;
  font-size: 18px;
`;

export const Button = styled.button`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.additional};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  transition-property: background-color, color;
  transition-duration: 350ms;
  transition-timing-function: ease;
  margin-bottom: 10px;

  :hover {
    background-color: ${({ theme }) => theme.color.additionalV2};
    color: ${({ theme }) => theme.color.black};
  }

  :hover svg {
    fill: ${({ theme }) => theme.color.black};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.white};
    margin-right: 5px;
    transition: fill 350ms ease;
  }
`;
