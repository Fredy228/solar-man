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
  ListOverLay,
  SpanOverLay,
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
              alt="Автономна 20кВт станція в с.Затока для забезпечення роботы готелю
              Рапана"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Автономна 20кВт станція в с.Затока для забезпечення роботы готелю
              Рапана
            </TitleOverLay>
            <SpanOverLay>2020</SpanOverLay>
            <ListOverLay>
              <TextOverLay>
                Сонячні панелі Sunport Power 455Ват - 44 шт.
              </TextOverLay>
              <TextOverLay>
                Інвертори гібридні Victron Energy Quattro 48 8kVa - 3 шт.
              </TextOverLay>
              <TextOverLay>АКб LiFePO 4 ємністю - 60кВт</TextOverLay>
            </ListOverLay>
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
              alt="Мережева 36 кВт станція під Зелений Тариф в с. Фонтанка"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Мережева 36 кВт станція під Зелений Тариф в с. Фонтанка
            </TitleOverLay>
            <SpanOverLay>2018</SpanOverLay>
            <ListOverLay>
              <TextOverLay>Сонячні панелі ALM 450Ват - 44 шт.</TextOverLay>
              <TextOverLay>
                Мережевий трифазний інвертор Grrowat 30 kVt - 1 шт.
              </TextOverLay>
            </ListOverLay>
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
              alt="Мережева 35 кВт станція під Зелений Тариф в м. Кодима"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Мережева 35 кВт станція під Зелений Тариф в м. Кодима
            </TitleOverLay>
            <SpanOverLay>2021</SpanOverLay>
            <ListOverLay>
              <TextOverLay>
                Сонячні панелі Canadian Solar 480Ват - 74 шт.
              </TextOverLay>
              <TextOverLay>
                Мережевий трифазний інвертор Solis S5-GC30K - 1 шт.
              </TextOverLay>
            </ListOverLay>
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
              alt="Автономна 7 кВт станція, м. Одеса, район Черноморка 13 станція"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Автономна 7 кВт станція, м. Одеса, район Черноморка 13 станція
            </TitleOverLay>
            <SpanOverLay>2019</SpanOverLay>
            <ListOverLay>
              <TextOverLay>Сонячні панелі JA Solar 450Ват - 16 шт.</TextOverLay>
              <TextOverLay>
                Інвертори Victron Energy Quattro 48 8kVa - 1 шт.
              </TextOverLay>
              <TextOverLay>АКб LiFePO4 ємністю - 10кВт</TextOverLay>
            </ListOverLay>
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
              alt=" Мережева 28 кВт станція під Зелений Тариф в м. Одеса, район Царьке
              село"
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Мережева 28 кВт станція під Зелений Тариф в м. Одеса, район Царьке
              село
            </TitleOverLay>
            <SpanOverLay>2022</SpanOverLay>
            <ListOverLay>
              <TextOverLay>
                Сонячні панелі Canadian Solar 490Ват - 57 шт.
              </TextOverLay>
              <TextOverLay>
                Мережевий трифазний інвертор SolarEdge SE 27.6кВт - 1 шт.
              </TextOverLay>
            </ListOverLay>
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
              alt="Мережева станція 15кВт під Зелений Тариф в с. Маяки, Одеська обл."
            />
          </picture>
          <PortfolioOverLay>
            <TitleOverLay>
              Мережева станція 15кВт під Зелений Тариф в с. Маяки, Одеська обл.
            </TitleOverLay>
            <SpanOverLay>2021</SpanOverLay>
            <ListOverLay>
              <TextOverLay>Сонячні панелі JA Solar 490Ват - 30 шт</TextOverLay>
              <TextOverLay>
                Мережевий трифазний інвертор Fronius Symo 15 кВт -1 шт.
              </TextOverLay>
            </ListOverLay>
          </PortfolioOverLay>
        </PortfolioItem>
      </PortfolioList>
    </PortfolioInner>
  );
};
