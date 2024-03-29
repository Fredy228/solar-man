import styled from 'styled-components';

export const WrapperFilter = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 999px) {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0;
    }
  }
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
  color: ${({ theme }) => theme.color.g2};
  margin-bottom: 10px;
`;

export const ListCheckBox = styled.ul`
  width: 190px;
  transition: opacity 250ms ease 350ms;
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

export const ItemCheckBox = styled.li`
  margin-bottom: 5px;
  width: 100%;
`;

export const LabelCheckBox = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const InputCheckBox = styled.input`
  display: none;
`;

export const TextCheckBox = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.g2};
  flex: 1;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CustomCheckBox = styled.span`
  width: 18px;
  height: 18px;
  display: block;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.second};
  border-radius: 4px;
  margin-right: 7px;
  position: relative;

  :before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.color.second};
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

export const FilterForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CountInfo = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.g2};
`;

export const ResetFilter = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 30px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 350ms ease;

  :hover {
    background-color: ${({ theme }) => theme.color.second};
  }
`;
