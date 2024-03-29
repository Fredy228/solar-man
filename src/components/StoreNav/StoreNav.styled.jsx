import styled from 'styled-components';
import Select from 'react-select';

export const InnerNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 10px;
`;

export const WrapperTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const WrapperSort = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main};
  padding: 10px;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SortLabelWrap = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 767px) {
    flex-direction: column;

    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const ButtonTab = styled.button`
  font-family: inherit;
  font-weight: ${({ active }) => (active ? '700' : '500')};
  height: 40px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  width: 100%;
  margin: 5px 30px;
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.color.white : theme.color.main};

  border: 2px solid
    ${({ theme, active }) => (active ? theme.color.second : theme.color.main)};
  background-color: ${({ theme, active }) =>
    active ? theme.color.second : 'transparent'};
  border-radius: 50px;

  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-property: color, background-color, border-color;

  :hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, active }) =>
      active ? theme.color.second : theme.color.main};
  }

  @media screen and (max-width: 767px) {
    margin: 5px;
    font-size: 15px;
  }
`;

export const SelectCustom = styled(Select)`
  display: block;
  text-align: center;
  margin-left: 10px;

  @media screen and (max-width: 767px) {
    margin-top: 5px;
  }

  .react-select__control {
    border-radius: 10px;
    outline: transparent;
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    box-shadow: none;
    width: 260px;

    @media screen and (max-width: 999px) {
      width: 250px;
    }

    @media screen and (max-width: 767px) {
      width: 240px;
    }
  }

  .react-select__control-is-focused {
    border: none;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.color.g2};
  }

  .react-select__indicators {
    svg {
      fill: ${({ theme }) => theme.color.g2};
    }
  }

  .react-select__input-container {
    color: ${({ theme }) => theme.color.white};
    caret-color: transparent;
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.color.white};
  }

  .react-select__option {
    border-radius: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.g500};
    transition-property: color, background-color;
    transition-timing-function: ease;
    transition-duration: 350ms;

    :not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.color.second};
    color: ${({ theme }) => theme.color.white};
  }

  .react-select__menu {
    border-radius: 10px;
    padding: 5px;
  }
`;
