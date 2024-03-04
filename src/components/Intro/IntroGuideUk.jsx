import { NavLink } from 'react-router-dom';
import {
  IntroBox,
  CardsIntro,
  CardIntro,
  OverlayIntro,
  TextOverlay,
  IntroTitle,
  EllipseBg,
  ImgEllipse,
  EllipseBox,
  OverlayIntroIco,
  IntroTitleSpan,
  BtnOverlay,
} from './Intro.styled';
import { Icon } from 'components/Icon/Icon';
import { Container } from '../../pages/Common.styled';

import intro1_webp from '../../img/intro/intro-1.webp';
import intro2_webp from '../../img/intro/intro-2.webp';
import intro3_webp from '../../img/intro/intro_4.webp';
import intro4_webp from '../../img/intro/intro_5.webp';
import vector_img from '../../img/intro/vector.webp';

export const IntroGuideUk = () => {
  return (
    <IntroBox>
      <EllipseBg>
        <EllipseBox>
          <ImgEllipse
            src={vector_img}
            alt={'Вектор'}
            loading="lazy"
            width={'743'}
            height={'750'}
          />
        </EllipseBox>
      </EllipseBg>
      <Container>
        <IntroTitle>
          Надійні, сертифіковані <br /> сонячні станції. <br />{' '}
          <IntroTitleSpan>15-років гарантії</IntroTitleSpan>
        </IntroTitle>
        <CardsIntro>
          <CardIntro srcImg={intro2_webp}>
            <NavLink to="/private/uk">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-home" />
                </OverlayIntroIco>
                <TextOverlay>
                  Сонячні станції <br /> для дому
                </TextOverlay>
                <BtnOverlay>Детальніше</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro3_webp}>
            <NavLink to="/green/uk">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-green-tarif" />
                </OverlayIntroIco>
                <TextOverlay>Зелений тариф</TextOverlay>
                <BtnOverlay>Детальніше</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro4_webp}>
            <NavLink to="/smallbusiness/uk">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-small-bisnes" />
                </OverlayIntroIco>
                <TextOverlay>
                  Для власників <br /> малого бізнесу
                </TextOverlay>
                <BtnOverlay>Детальніше</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro1_webp}>
            <NavLink to="/bigbusiness/uk">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-company" />
                </OverlayIntroIco>
                <TextOverlay>
                  Для власників <br /> великого бізнесу
                </TextOverlay>
                <BtnOverlay>Детальніше</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>
        </CardsIntro>
      </Container>
    </IntroBox>
  );
};
