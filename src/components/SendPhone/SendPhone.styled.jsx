import styled from 'styled-components';
import { IMaskInput } from 'react-imask';

export const Inner = styled.div`
  //background: radial-gradient(
  //  186.93% 102.34% at 81.46% 7.95%,
  //  #fff8de 0%,
  //  #dceeff 100%
  //);
  background-color: ${({ theme }) => theme.color.main};

  padding: 20px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
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
  color: ${({ theme }) => theme.color.white};
  text-decoration: underline;
  font-weight: 500;
  transition: color 350ms ease;

  :hover {
    color: ${({ theme }) => theme.color.g500};
  }
`;

export const TextAdd = styled.p`
  font-style: italic;
  margin-top: 10px;
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '300px')};
  width: ${({ widthValue }) => (widthValue ? widthValue : 'initial')};
  margin: ${({ marginValue }) =>
    marginValue ? marginValue : '20px auto 0 auto'};
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  width: 100%;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
`;

export const PhoneInput = styled(IMaskInput)`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  width: 100%;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px;
`;

export const Button = styled.button`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.second};
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
  transition-property: background-color;
  transition-duration: 350ms;
  transition-timing-function: ease;
  margin-bottom: 10px;

  :hover {
    background-color: ${({ theme }) => theme.color.main};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.white};
    margin-right: 5px;
  }
`;
