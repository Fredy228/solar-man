import styled from 'styled-components';

export const GreenBenefitInner = styled.div`
  padding: 50px 0 0 0;
`;

export const GreenBenefitList = styled.ul`
  display: flex;
  margin-top: 30px;
  gap: 15px;

  @media screen and (max-width: 999px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const GreenBenefitItem = styled.li`
  flex: 1;
  text-align: center;

  @media screen and (max-width: 999px) {
    flex: initial;
    width: calc(33.333% - 15px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const GreenBenefitNumber = styled.span`
  font-size: 100px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.second};
  line-height: 1;
`;

export const GreenBenefitTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.second};
  margin-bottom: 20px;
`;

export const GreenBenefitText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.g900};
  font-weight: 500;
`;
