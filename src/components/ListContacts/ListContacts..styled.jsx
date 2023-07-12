import styled from 'styled-components';

export const InnerListContacts = styled.div`
  width: 100%;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-top: 80px;
    margin-bottom: -30px;
  }
`;

export const ListContactsS = styled.ul`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ItemContactsS = styled.li`
  flex: 1;
  display: flex;
  padding-bottom: 15px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const WrapperIcon = styled.div`
  margin-right: 15px;
`;
export const BoxIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
  }
`;

export const LinkContacts = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.g1};

  :hover {
    text-decoration: underline;
  }
`;

export const TitleContacts = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.g2};
  margin-bottom: 8px;
`;

export const TextContacts = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.g1};
`;
