import styled from 'styled-components';

export const FooterBox = styled.footer`
  background-color: ${({ theme }) => theme.color.main};
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.color.second};
  padding: 15px 0;
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FooterLogo = styled.div`
  svg {
    width: auto;
    height: 50px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 20px;
  transition: color 350ms ease;

  :hover {
    color: ${({ theme }) => theme.color.additional};
  }
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;
