import {
  BtnOverlay,
  CardIntro,
  CardsIntro,
  IntroBox,
  OverlayIntro,
  OverlayIntroIco,
  TextOverlay,
} from './Intro.styled';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../reused/icon/Icon';

import intro2_webp from '../../../img/intro/intro-2.webp';
import intro3_webp from '../../../img/intro/intro_4.webp';
import intro4_webp from '../../../img/intro/intro_5.webp';
import intro1_webp from '../../../img/intro/intro-1.webp';

export const IntroCardsRu = () => {
  return (
    <IntroBox style={{ paddingTop: '20px' }}>
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
    </IntroBox>
  );
};
