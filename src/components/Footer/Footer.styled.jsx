import styled from 'styled-components';

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

export const FooterLogo = styled.div`
  svg {
    width: auto;
    height: 50px;
    fill: ${({ theme }) => theme.color.main};
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: auto;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.g1};
  transition: color 350ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 30px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-right: 5px;
    width: 40px;
    height: 40px;

    ::after {
      content: '';
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.second};
    }
  }

  :hover {
    color: ${({ theme }) => theme.color.second};
  }

  svg {
    stroke: ${({ theme }) => theme.color.second};
    width: 20px;
    height: 20px;
    margin-right: 5px;
    position: relative;

    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
  }
`;

export const Copyright = styled.div`
  color: #6b7280;
  text-align: center;
  font-size: 12px;
  margin-left: 30px;

  @media screen and (max-width: 767px) {
    margin-left: 15px;
  }
`;
