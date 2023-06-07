import styled from 'styled-components';

export const WrapperFilter = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  width: 100%;
  min-height: calc(100vh - 115px);
  border-radius: 20px;
  margin: 15px 0;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const ListFilter = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ItemFilter = styled.li`
  margin-bottom: 15px;
`;

export const TitleFilter = styled.h5`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

export const ListCheckBox = styled.ul`
  width: 190px;
  transition: opacity 250ms ease 350ms;
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  border-bottom: 2px solid ${({ theme }) => theme.color.additional};
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

export const ItemCheckBox = styled.li`
  margin-bottom: 5px;
  width: 100%;
`;

export const LabelCheckBox = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const InputCheckBox = styled.input`
  display: none;
`;

export const CustomCheckBox = styled.span`
  width: 18px;
  height: 18px;
  display: block;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.additional};
  border-radius: 4px;
  margin-right: 7px;
  position: relative;

  :before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.color.additional};
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 350ms ease;
  }

  ${InputCheckBox}:checked + &:before {
    opacity: 1;
  }
`;

export const CountInfo = styled.p`
  width: 150px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: auto;
  border-radius: 30px;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.color.additional};
  background-color: ${({ theme }) => theme.color.additional};
  color: ${({ theme }) => theme.color.white};
  cursor: default;
`;
