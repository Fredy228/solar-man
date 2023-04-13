import {
  PortfolioInner,
  SectionTitle,
  TitleSpan,
  PortfolioList,
  PortfolioItem,
  PortfolioImg,
  PortfolioOverLay,
  TitleOverLay,
  TextOverLay,
} from './Portfolio.styled';

import imgJpg_1 from '../../img/portfolio/portf-1.jpg';
import imgWebp_1 from '../../img/portfolio/portf-1.webp';
import imgJpg_2 from '../../img/portfolio/portf-2.jpg';
import imgWebp_2 from '../../img/portfolio/portf-2.webp';
import imgJpg_3 from '../../img/portfolio/portf-3.jpg';
import imgWebp_3 from '../../img/portfolio/portf-3.webp';
import imgJpg_4 from '../../img/portfolio/portf-4.jpg';
import imgWebp_4 from '../../img/portfolio/portf-4.webp';
import imgJpg_5 from '../../img/portfolio/portf-5.jpg';
import imgWebp_5 from '../../img/portfolio/portf-5.webp';
import imgJpg_6 from '../../img/portfolio/portf-6.jpg';
import imgWebp_6 from '../../img/portfolio/portf-6.webp';

export const Portfolio = () => {
  return (
    <PortfolioInner id="projects" data-section>
      <SectionTitle>
        <TitleSpan>Наші</TitleSpan> проекти
      </SectionTitle>
      <PortfolioList>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_1} />
            <source type="image/jpg" srcSet={imgJpg_1} />
            <PortfolioImg
              src={imgJpg_1}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_2} />
            <source type="image/jpg" srcSet={imgJpg_2} />
            <PortfolioImg
              src={imgJpg_2}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_3} />
            <source type="image/jpg" srcSet={imgJpg_3} />
            <PortfolioImg
              src={imgJpg_3}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_4} />
            <source type="image/jpg" srcSet={imgJpg_4} />
            <PortfolioImg
              src={imgJpg_4}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_5} />
            <source type="image/jpg" srcSet={imgJpg_5} />
            <PortfolioImg
              src={imgJpg_5}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
        <PortfolioItem>
          <picture>
            <source type="image/webp" srcSet={imgWebp_6} />
            <source type="image/jpg" srcSet={imgJpg_6} />
            <PortfolioImg
              src={imgJpg_6}
              loading="lazy"
              width="1280"
              height="1024"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Сетевая солнечная станция 30 кВт в Одесской области
            </TitleOverLay>
            <TextOverLay>
              Солнечная панель Swiss Solar - n435 Вт, 5 BB, монокристалл
            </TextOverLay>
            <TextOverLay>
              Инвертор сетевой Huawei SUN2000-33 KTL - 30 кВт, 3 фазы
            </TextOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
      </PortfolioList>
    </PortfolioInner>
  );
};
