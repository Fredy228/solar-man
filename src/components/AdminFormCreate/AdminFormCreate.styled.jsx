import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.color.main};
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 50px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.black};
  font-family: inherit;
  font-weight: inherit;
  width: 100%;
  margin-top: 5px;
  text-align: center;
  transition: border-color 350ms ease;

  ::placeholder {
    color: ${({ theme }) => theme.color.black};
    opacity: 0.8;
    font-family: inherit;
    font-weight: inherit;
  }

  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.color.additional};
  }
`;

export const InputFile = styled.label`
  margin-bottom: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.additional};
  padding: 10px;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.additional};
  }
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const ImgInfo = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  font-style: italic;
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Textarey = styled.textarea`
  resize: none;
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.black};
  padding: 15px;
  font-size: 16px;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  transition: border-color 350ms ease;
  margin-top: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.color.black};
    opacity: 0.8;
    font-family: inherit;
    font-weight: inherit;
  }

  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.color.additional};
  }
`;

export const Label = styled.label`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 35px;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 18px;
  font-family: inherit;
  font-weight: inherit;
  border: 2px solid ${({ theme }) => theme.color.additional};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.main};
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: background-color;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    fill: ${({ theme }) => theme.color.black};
    transition: fill 350ms ease;
  }

  :not(:disabled):hover {
    background-color: ${({ theme }) => theme.color.additional};
    color: ${({ theme }) => theme.color.white};
  }
  :not(:disabled):hover svg {
    fill: ${({ theme }) => theme.color.white};
  }
`;

export const ButtonCircle = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: background-color 350ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.additional};
    svg {
      fill: ${({ theme }) => theme.color.white};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    transition: fill 350ms ease;
  }
`;

export const Underline = styled.span`
  max-width: 500px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.additional};
  margin-bottom: 5px;
`;

export const Select = styled.select`
  max-width: 500px;
  margin: 5px 0;
  width: 100%;
  text-align: center;
  font-family: inherit;
  font-weight: inherit;
  font-size: 16px;
  padding: 7px 5px;
  border-radius: 50px;
  outline: transparent;
`;

export const Option = styled.option``;
