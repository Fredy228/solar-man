import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px;
`;

export const Main = styled.main``;

export const Intro = styled.section`
  width: 100%;
`;

export const CardsIntro = styled.div`
  display: flex;
  height: 400px;
`;

export const CardIntro = styled.div`
  margin: 3px;
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  transition: flex 350ms ease;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  cursor: pointer;
`;

export const IntroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const OverlayIntro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 40%
  );
  padding: 15px;
`;

export const NameCardIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme: { color } }) => color.white};
    margin-bottom: 10px;
  }
`;

export const TextOverlay = styled.p`
  color: ${({ theme: { color } }) => color.white};
  max-width: 200px;
`;
