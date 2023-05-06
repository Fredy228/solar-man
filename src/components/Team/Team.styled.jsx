import styled from 'styled-components';

export const TeamInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0 0 0;

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 30px auto 0 auto;
  }
`;

export const TeamItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: calc(100% / 2);
  }

  @media screen and (min-width: 1000px) {
    width: calc(100% / 3);
  }
`;

export const SpanLineText = styled.span`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 14px;
  width: 100%;
  opacity: 0;
  transition: opacity 350ms ease;
  font-style: italic;
`;

export const TeamItemInner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  :after {
    position: absolute;
    content: '';
    bottom: 0;
    right: 20px;
    width: calc(50% - 20px);
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.second};
    transition-property: width;
    transition-duration: 350ms;
    transition-timing-function: ease;
  }

  :before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 20px;
    width: calc(50% - 18px);
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.second};
    transition-property: width, bottom;
    transition-duration: 350ms;
    transition-timing-function: ease;
  }

  :hover::after,
  :hover::before {
    width: 35px;
  }

  :hover ${SpanLineText} {
    opacity: 1;
  }
`;

export const TeamImg = styled.img`
  max-width: 270px;
  border-radius: 20px;
  margin-bottom: 15px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const TeamName = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const TeamRole = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: 25px;
    stroke: ${({ theme }) => theme.color.second};
    margin-right: 5px;
  }
`;

export const TeamRoleText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.second};
  font-weight: bold;
`;
