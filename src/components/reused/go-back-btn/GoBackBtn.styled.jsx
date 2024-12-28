import styled from 'styled-components';

export const WrapperNavBack = styled.div`
  width: 100%;
`;

export const ButtonBack = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.g2};
  transition: color 350ms ease;
  margin-bottom: 15px;

  svg {
    width: 30px;
    height: 30px;
    stroke: ${({ theme }) => theme.color.g2};
    transition: stroke 350ms ease;
  }

  :hover {
    color: ${({ theme }) => theme.color.second};

    svg {
      stroke: ${({ theme }) => theme.color.second};
    }
  }
`;
