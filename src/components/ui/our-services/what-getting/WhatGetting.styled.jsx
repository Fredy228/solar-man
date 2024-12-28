import styled from 'styled-components';

export const WhatGettingInner = styled.div`
  padding-top: 60px;
`;

export const WhatGettingList = styled.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 999px) {
    flex-wrap: wrap;
  }
`;

export const WhatGettingItem = styled.li`
  flex: 1;
  position: relative;

  border: 1px solid ${({ theme: { color } }) => color.main};
  border-radius: 8px;
  height: 168px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const WhatGettingIcon = styled.div`
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);

  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme: { color } }) => color.main};

  > svg {
    width: 15px;
    height: 15px;
    fill: ${({ theme: { color } }) => color.white};
  }
`;

export const WhatGettingText = styled.p`
  color: ${({ theme: { color } }) => color.g2};
  font-size: 21px;
  font-weight: 600;
  text-align: center;
`;
