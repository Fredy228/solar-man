import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const ReactPaginateStyled = styled(ReactPaginate)`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  flex-direction: row;
  height: 52px;
  gap: 7px;
  padding-left: 12px;
  padding-right: 12px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;

  .paginationLink {
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.color.additional};
    cursor: pointer;
    font-size: 16px;
    line-height: 0.94;
    color: ${({ theme }) => theme.color.additional};
    transition: transform 350ms ease;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  .paginationActiveLink {
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.additional};
    font-size: 16px;
    line-height: 0.94;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.additional};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.color.additional};
  }
`;
