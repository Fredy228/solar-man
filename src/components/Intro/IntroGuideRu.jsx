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

export const IntroGuideRu = () => {
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
          Надежные, сертифицированные <br /> солнечные станции. <br />{' '}
          <IntroTitleSpan>15-лет гарантии</IntroTitleSpan>
        </IntroTitle>
        <CardsIntro>
          <CardIntro srcImg={intro2_webp}>
            <NavLink to="/private/ru">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-home" />
                </OverlayIntroIco>
                <TextOverlay>
                  Солнечные станции <br /> для дома
                </TextOverlay>
                <BtnOverlay>Подробнее</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro3_webp}>
            <NavLink to="/green/ru">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-green-tarif" />
                </OverlayIntroIco>
                <TextOverlay>Зеленый тариф</TextOverlay>
                <BtnOverlay>Подробнее</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro4_webp}>
            <NavLink to="/smallbusiness/ru">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-small-bisnes" />
                </OverlayIntroIco>
                <TextOverlay>
                  Для владельцев <br /> малого бизнеса
                </TextOverlay>
                <BtnOverlay>Подробнее</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro1_webp}>
            <NavLink to="/bigbusiness/ru">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-company" />
                </OverlayIntroIco>
                <TextOverlay>
                  Для власників <br /> великого бізнесу
                </TextOverlay>
                <BtnOverlay>Подробнее</BtnOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>
        </CardsIntro>
      </Container>
    </IntroBox>
  );
};
