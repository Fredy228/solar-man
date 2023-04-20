import {
  IntroBox,
  CardsIntro,
  CardIntro,
  OverlayIntro,
  TextOverlay,
  IntroImg,
  NameCardIntro,
} from './Intro.styled';
import { Icon } from 'components/Icon/Icon';

import intro1_xl_webp from '../../img/intro/intro-1_xl.webp';
import intro1_xl_jpg from '../../img/intro/intro-1_xl.jpg';
import intro2_xl_webp from '../../img/intro/intro-2_xl.webp';
import intro2_xl_jpg from '../../img/intro/intro-2_xl.jpg';
import intro3_xl_webp from '../../img/intro/intro-3_xl.webp';
import intro3_xl_jpg from '../../img/intro/intro-3_xl.jpg';
import intro1_md_webp from '../../img/intro/intro-1_md.webp';
import intro1_md_jpg from '../../img/intro/intro-1_md.jpg';
import intro2_md_webp from '../../img/intro/intro-2_md.webp';
import intro2_md_jpg from '../../img/intro/intro-2_md.jpg';
import intro3_md_webp from '../../img/intro/intro-3_md.webp';
import intro3_md_jpg from '../../img/intro/intro-3_md.jpg';
import intro1_sm_webp from '../../img/intro/intro-1_sm.webp';
import intro1_sm_jpg from '../../img/intro/intro-1_sm.jpg';
import intro2_sm_webp from '../../img/intro/intro-2_sm.webp';
import intro2_sm_jpg from '../../img/intro/intro-2_sm.jpg';
import intro3_sm_webp from '../../img/intro/intro-3_sm.webp';
import intro3_sm_jpg from '../../img/intro/intro-3_sm.jpg';

export const Intro = ({ toggleModal }) => {
  const enterCurrentCard = e => {
    const currentCard = e.currentTarget;
    currentCard.style.flex = '2';
  };

  const leaveCurrentCard = e => {
    const currentCard = e.currentTarget;
    currentCard.style.flex = '1';
  };

  return (
    <IntroBox id="home" data-section>
      <CardsIntro>
        <CardIntro
          onMouseEnter={enterCurrentCard}
          onMouseLeave={leaveCurrentCard}
          onClick={toggleModal}
        >
          <picture>
            <source
              media="(min-width: 1000px)"
              type="image/webp"
              srcSet={intro1_xl_webp}
            />
            <source
              media="(min-width: 1000px)"
              type="image/jpg"
              srcSet={intro1_xl_jpg}
            />
            <source
              media="(min-width: 769px)"
              type="image/webp"
              srcSet={intro1_md_webp}
            />
            <source
              media="(min-width: 769px)"
              type="image/jpg"
              srcSet={intro1_md_jpg}
            />
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet={intro1_sm_webp}
            />
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={intro1_sm_jpg}
            />
            <IntroImg
              src={intro1_xl_jpg}
              loading="lazy"
              width="620"
              height="420"
            />
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
          onClick={toggleModal}
        >
          <picture>
            <source
              media="(min-width: 1000px)"
              type="image/webp"
              srcSet={intro2_xl_webp}
            />
            <source
              media="(min-width: 1000px)"
              type="image/jpg"
              srcSet={intro2_xl_jpg}
            />
            <source
              media="(min-width: 769px)"
              type="image/webp"
              srcSet={intro2_md_webp}
            />
            <source
              media="(min-width: 769px)"
              type="image/jpg"
              srcSet={intro2_md_jpg}
            />
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet={intro2_sm_webp}
            />
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={intro2_sm_jpg}
            />
            <IntroImg
              src={intro2_xl_jpg}
              loading="lazy"
              width="620"
              height="420"
            />
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
          onClick={toggleModal}
        >
          <picture>
            <source
              media="(min-width: 1000px)"
              type="image/webp"
              srcSet={intro3_xl_webp}
            />
            <source
              media="(min-width: 1000px)"
              type="image/jpg"
              srcSet={intro3_xl_jpg}
            />
            <source
              media="(min-width: 769px)"
              type="image/webp"
              srcSet={intro3_md_webp}
            />
            <source
              media="(min-width: 769px)"
              type="image/jpg"
              srcSet={intro3_md_jpg}
            />
            <source
              media="(max-width: 768px)"
              type="image/webp"
              srcSet={intro3_sm_webp}
            />
            <source
              media="(max-width: 768px)"
              type="image/jpg"
              srcSet={intro3_sm_jpg}
            />
            <IntroImg
              src={intro3_xl_jpg}
              loading="lazy"
              width="620"
              height="420"
            />
          </picture>
          <OverlayIntro>
            <NameCardIntro>
              <Icon name="icon-store" />
              <TextOverlay>Магазин обладнання</TextOverlay>
            </NameCardIntro>
          </OverlayIntro>
        </CardIntro>
      </CardsIntro>
    </IntroBox>
  );
};
