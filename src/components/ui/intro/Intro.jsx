import { NavLink } from 'react-router-dom';
import {
  IntroBox,
  CardsIntro,
  CardIntro,
  OverlayIntro,
  TextOverlay,
  IntroTitle,
  IntroText,
  EllipseBg,
  ImgEllipse,
  EllipseBox,
  OverlayIntroIco,
} from './Intro.styled';
import { Icon } from 'components/reused/icon/Icon';

import intro1_webp from '../../../img/intro/intro-1.webp';
import intro2_webp from '../../../img/intro/intro-2.webp';
import intro3_webp from '../../../img/intro/intro-3.webp';
import vector_img from '../../../img/intro/vector.webp';
import { Container } from '../../../pages/Common.styled';

export const Intro = () => {
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
          Сонячні електростанції <br /> для незалежності <br /> та прибутку
        </IntroTitle>
        <IntroText>
          Комплексні рішення під ключ для підприємств та звичайних
          домогосподарств
        </IntroText>
        <CardsIntro>
          <CardIntro srcImg={intro1_webp}>
            <NavLink to="/enterprises">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-company" />
                </OverlayIntroIco>
                <TextOverlay>
                  Сонячні станції <br /> для підприємств
                </TextOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro2_webp}>
            <NavLink to="/home">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-home" />
                </OverlayIntroIco>
                <TextOverlay>
                  Сонячні станції <br /> для дому
                </TextOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro3_webp}>
            <NavLink to="/store">
              <OverlayIntro>
                <OverlayIntroIco>
                  <Icon name="icon-store" />
                </OverlayIntroIco>
                <TextOverlay>
                  Обладнання <br /> та сервіс
                </TextOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>
        </CardsIntro>
      </Container>
    </IntroBox>
  );
};
