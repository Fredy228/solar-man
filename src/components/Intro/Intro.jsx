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

import companyImgJpg from '../../img/intro/company.jpg';
import homeImgJpg from '../../img/intro/home.jpg';
import storeImgJpg from '../../img/intro/store.jpg';
import companyImgWebp from '../../img/intro/company.webp';
import homeImgWebp from '../../img/intro/home.webp';
import storeImgWebp from '../../img/intro/store.webp';

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
    <IntroBox>
      <CardsIntro>
        <CardIntro
          onMouseEnter={enterCurrentCard}
          onMouseLeave={leaveCurrentCard}
          onClick={toggleModal}
        >
          <picture>
            <source type="image/webp" srcSet={companyImgWebp} />
            <source type="image/jpg" srcSet={companyImgJpg} />
            <IntroImg src={companyImgJpg} loading="lazy" />
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
            <source type="image/webp" srcSet={homeImgWebp} />
            <source type="image/jpg" srcSet={homeImgJpg} />
            <IntroImg src={homeImgJpg} loading="lazy" />
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
            <source type="image/webp" srcSet={storeImgWebp} />
            <source type="image/jpg" srcSet={storeImgJpg} />
            <IntroImg src={storeImgJpg} loading="lazy" />
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
