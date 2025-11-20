import {
  BtnOverlay,
  CardIntro,
  CardsIntro,
  IntroBox,
  OverlayIntro,
  OverlayIntroIco,
  TextOverlay,
} from './Intro.styled';
import { NavLinkWithUtm } from 'components/nav-link-with-utm/NavLinkWithUtm';
import { Icon } from '../../reused/icon/Icon';

import intro2_webp from '../../../img/intro/intro-2.webp';
import intro3_webp from '../../../img/intro/intro_4.webp';
import intro4_webp from '../../../img/intro/intro_5.webp';
import intro1_webp from '../../../img/intro/intro-1.webp';

export const IntroCardsUk = () => {
  return (
    <IntroBox style={{ paddingTop: '20px' }}>
      <CardsIntro>
        <CardIntro srcImg={intro2_webp}>
          <NavLinkWithUtm to="/private/uk">
            <OverlayIntro>
              <OverlayIntroIco>
                <Icon name="icon-home" />
              </OverlayIntroIco>
              <TextOverlay>
                Сонячні станції <br /> для дому
              </TextOverlay>
              <BtnOverlay>Детальніше</BtnOverlay>
            </OverlayIntro>
          </NavLinkWithUtm>
        </CardIntro>

        <CardIntro srcImg={intro3_webp}>
          <NavLinkWithUtm to="/green/uk">
            <OverlayIntro>
              <OverlayIntroIco>
                <Icon name="icon-green-tarif" />
              </OverlayIntroIco>
              <TextOverlay>Зелений тариф</TextOverlay>
              <BtnOverlay>Детальніше</BtnOverlay>
            </OverlayIntro>
          </NavLinkWithUtm>
        </CardIntro>

        <CardIntro srcImg={intro4_webp}>
          <NavLinkWithUtm to="/smallbusiness/uk">
            <OverlayIntro>
              <OverlayIntroIco>
                <Icon name="icon-small-bisnes" />
              </OverlayIntroIco>
              <TextOverlay>
                Для власників <br /> малого бізнесу
              </TextOverlay>
              <BtnOverlay>Детальніше</BtnOverlay>
            </OverlayIntro>
          </NavLinkWithUtm>
        </CardIntro>

        <CardIntro srcImg={intro1_webp}>
          <NavLinkWithUtm to="/bigbusiness/uk">
            <OverlayIntro>
              <OverlayIntroIco>
                <Icon name="icon-company" />
              </OverlayIntroIco>
              <TextOverlay>
                Для власників <br /> великого бізнесу
              </TextOverlay>
              <BtnOverlay>Детальніше</BtnOverlay>
            </OverlayIntro>
          </NavLinkWithUtm>
        </CardIntro>
      </CardsIntro>
    </IntroBox>
  );
};
