import styled from 'styled-components';

export const InnerItIsSolarMan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const TextItIs = styled.p`
  color: ${({ theme }) => theme.color.g2};
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
`;
