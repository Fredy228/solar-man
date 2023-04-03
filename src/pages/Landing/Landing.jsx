import { LandHeader } from 'components/Header/LandHeader';
import { Icon } from 'components/Icon/Icon';
import { Container, Frontier } from 'pages/Common.styled';
import {
  Header,
  Main,
  Intro,
  CardsIntro,
  CardIntro,
  OverlayIntro,
  TextOverlay,
  IntroImg,
  NameCardIntro,
} from './Landing.styled';

import companyImgJpg from '../../img/intro/company.jpg';
import homeImgJpg from '../../img/intro/home.jpg';
import storeImgJpg from '../../img/intro/store.jpg';
import companyImgWebp from '../../img/intro/company.webp';
import homeImgWebp from '../../img/intro/home.webp';
import storeImgWebp from '../../img/intro/store.webp';

export const Landing = () => {
  const enterCurrentCard = e => {
    const currentCard = e.currentTarget;
    currentCard.style.flex = '2';
  };
  const leaveCurrentCard = e => {
    const currentCard = e.currentTarget;
    currentCard.style.flex = '1';
  };

  return (
    <>
      <Header>
        <Container>
          <LandHeader />
        </Container>
      </Header>

      <Main>
        {/* Into */}
        <Frontier>
          <Intro>
            <CardsIntro>
              <CardIntro
                onMouseEnter={enterCurrentCard}
                onMouseLeave={leaveCurrentCard}
              >
                <picture>
                  <source type="image/webp" srcSet={companyImgWebp} />
                  <source type="image/jpg" srcSet={companyImgJpg} />
                  <IntroImg src={companyImgJpg} />
                </picture>
                <OverlayIntro>
                  <NameCardIntro>
                    <Icon name="icon-company" />
                    <TextOverlay>Сонячні станції для підприємств</TextOverlay>
                  </NameCardIntro>
                </OverlayIntro>
              </CardIntro>

              <CardIntro
                onMouseEnter={enterCurrentCard}
                onMouseLeave={leaveCurrentCard}
              >
                <picture>
                  <source type="image/webp" srcSet={homeImgWebp} />
                  <source type="image/jpg" srcSet={homeImgJpg} />
                  <IntroImg src={homeImgJpg} />
                </picture>
                <OverlayIntro>
                  <NameCardIntro>
                    <Icon name="icon-home" />
                    <TextOverlay>Сонячні станції для дому</TextOverlay>
                  </NameCardIntro>
                </OverlayIntro>
              </CardIntro>

              <CardIntro
                onMouseEnter={enterCurrentCard}
                onMouseLeave={leaveCurrentCard}
              >
                <picture>
                  <source type="image/webp" srcSet={storeImgWebp} />
                  <source type="image/jpg" srcSet={storeImgJpg} />
                  <IntroImg src={storeImgJpg} />
                </picture>
                <OverlayIntro>
                  <NameCardIntro>
                    <Icon name="icon-store" />
                    <TextOverlay>Магазин обладнання</TextOverlay>
                  </NameCardIntro>
                </OverlayIntro>
              </CardIntro>
            </CardsIntro>
          </Intro>
        </Frontier>
      </Main>
    </>
  );
};
