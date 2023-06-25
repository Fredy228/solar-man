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
  // IntroImg,
} from './Intro.styled';
import { Icon } from 'components/Icon/Icon';

import intro1_webp from '../../img/intro/intro-1.webp';
// import intro1_jpg from '../../img/intro/intro-1.jpg';
import intro2_webp from '../../img/intro/intro-2.webp';
// import intro2_jpg from '../../img/intro/intro-2.jpg';
import intro3_webp from '../../img/intro/intro-3.webp';
// import intro3_jpg from '../../img/intro/intro-3.jpg';

// <picture>
//   <source type="image/webp" srcSet={intro1_webp} />
//   <source type="image/jpg" srcSet={intro1_jpg} />
//   <IntroImg
//     src={intro1_jpg}
//     loading="lazy"
//     width="396"
//     height="280"
//     alt="Сонячні станції для підприємств"
//   />
// </picture>

import vector_img from '../../img/intro/vector.webp';
import { Container } from '../../pages/Common.styled';

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
          Комплексні рішення під ключ для підприємств та звичайний
          домогосподарств
        </IntroText>
        <CardsIntro>
          <CardIntro srcImg={intro1_webp}>
            <NavLink to="/enterprises">
              <OverlayIntro>
                <Icon name="icon-company" />
                <TextOverlay>
                  Сонячні станції <br /> для підприємств
                </TextOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro2_webp}>
            <NavLink to="/home">
              <OverlayIntro>
                <Icon name="icon-home" />
                <TextOverlay>
                  Сонячні станції <br /> для дому
                </TextOverlay>
              </OverlayIntro>
            </NavLink>
          </CardIntro>

          <CardIntro srcImg={intro3_webp}>
            <NavLink to="/store">
              <OverlayIntro>
                <Icon name="icon-store" />
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
