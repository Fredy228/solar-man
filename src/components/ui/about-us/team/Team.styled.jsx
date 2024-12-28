import styled from 'styled-components';

export const TeamInner = styled.section`
  padding: 50px 0;

  @media screen and (max-width: 999px) {
    padding: 25px 0;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0 0 0;
  gap: 30px;

  @media screen and (max-width: 1199px) {
    gap: 20px;
  }

  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin: 30px auto 0 auto;
  }
`;

export const SpanLineText = styled.span`
  text-align: left;
  font-size: 18px;
  width: 100%;
  color: ${({ theme }) => theme.color.second};
  font-weight: 600;

  @media screen and (max-width: 999px) {
    text-align: center;
  }
`;

export const TeamItemInner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #255898;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const TeamImg = styled.img`
  width: 200px;
`;

export const TeamName = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};

  @media screen and (max-width: 999px) {
    text-align: center;
  }
`;

export const TeamRole = styled.div`
  margin-bottom: 20px;
  margin-top: 24px;
  position: relative;
  height: 0;
  width: 100%;
`;

export const TeamSvgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  transition-property: background-color;
  transition-duration: 350ms;
  transition-timing-function: ease;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.color.main};
    fill: ${({ theme }) => theme.color.main};
    transition-property: stroke, fill;
    transition-duration: 350ms;
    transition-timing-function: ease;
  }

  @media screen and (max-width: 999px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TeamItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 10px;
  border: 2px solid #255898;
  transition-property: border-color;
  transition-duration: 350ms;
  transition-timing-function: ease;

  :hover {
    border-color: ${({ theme }) => theme.color.second};

    ${TeamSvgWrapper} {
      background-color: ${({ theme }) => theme.color.second};

      svg {
        stroke: ${({ theme }) => theme.color.white};
        fill: ${({ theme }) => theme.color.white};
      }
    }
  }
`;
