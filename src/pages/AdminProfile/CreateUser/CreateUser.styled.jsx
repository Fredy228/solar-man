import styled from 'styled-components';

export const BoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
  max-width: 500px;
  width: 100%;
`;
export const Form = styled.form`
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;
export const Input = styled.input`
  margin-top: 5px;
  height: 30px;
  font-size: 16px;
  font-family: inherit;
  font-weight: inherit;
  border-radius: 15px;
  outline: none;
  padding: 0 15px;
  border: 2px solid transparent;
  text-align: center;
  transition: border-color 350ms ease;
  max-width: 300px;
  width: 100%;

  :focus,
  :hover {
    border-color: ${({ theme }) => theme.color.additional};
  }
`;
export const Select = styled.select`
  height: 30px;
  font-size: 16px;
  border-radius: 15px;
  padding: 0 15px;
`;
export const Option = styled.option``;
export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 2px solid ${({ theme }) => theme.color.second};
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
