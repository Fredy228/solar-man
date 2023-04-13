import styled from 'styled-components';

export const TeamInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  :after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: ${({ theme: { color } }) => color.second};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  color: ${({ theme: { color } }) => color.second};
`;

export const SetctionText = styled.p`
  text-align: center;
  font-size: 18px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  @media screen and (max-width: 768px) {
    font-size: 16px;
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
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.second};
    transition-property: width, bottom;
    transition-duration: 350ms;
    transition-timing-function: ease;
  }

  :hover::after {
    bottom: 15px;
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
  margin-bottom: 15px;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.color.second};
    margin-right: 5px;
  }
`;

export const TeamRoleText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.second};
  font-weight: bold;
`;