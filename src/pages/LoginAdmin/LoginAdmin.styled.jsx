import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-top: 90px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.main};

  @media screen and (max-width: 1000px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.main};
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  border: 2px solid transparent;
  padding: 7px 20px;
  font-size: 16px;
  margin-top: 5px;
  outline: none;

  :focus,
  :hover {
    border-color: ${({ theme }) => theme.color.additional};
  }
`;

export const InputPass = styled(Input)`
  padding-right: 75px;
`;

export const Label = styled.label`
  width: calc(100% - 20px);
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 15px;
`;

export const LabelPass = styled(Label)`
  position: relative;
`;

export const BtnShowPass = styled.button`
  position: absolute;
  background: transparent;
  right: 5px;
  bottom: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.main};
  font-family: inherit;
  font-weight: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 37px;
  z-index: 10;
  cursor: pointer;
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: inherit;
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;
