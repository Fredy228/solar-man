import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import {
  Inner,
  List,
  Item,
  Info,
  Title,
  Text,
  Img,
} from './ElementsStation.styled';

import img1_webp from '../../img/ourServices/enterprises/enterprises-1.webp';
import img1_png from '../../img/ourServices/enterprises/enterprises-1.png';
import img2_webp from '../../img/ourServices/enterprises/enterprises-2.webp';
import img2_png from '../../img/ourServices/enterprises/enterprises-2.png';
import img3_webp from '../../img/ourServices/enterprises/enterprises-3.webp';
import img3_png from '../../img/ourServices/enterprises/enterprises-3.png';
import img5_webp from '../../img/ourServices/enterprises/enterprises-5.webp';
import img5_png from '../../img/ourServices/enterprises/enterprises-5.png';

const elementsList = [
  {
    id: 1,
    title: 'Мережевий інвертор',
    text: 'Конвертує струм, згенерований сонячними батареями, в змінний, який може живити побутові електроприлади. Його вартість становить 20% від загальної вартості системи.s',
    image: [img1_webp, img1_png],
  },
  {
    id: 2,
    title: 'Сонячні батареї',
    text: 'Сонячні панелі перетворюють сонячну енергію на постійний струм, який може бути використаний для живлення різних пристроїв. Вони складають 60-70% вартості всієї системи та є ключовим компонентом сонячної електростанції.',
    image: [img2_webp, img2_png],
  },
  {
    id: 3,
    title: 'Автоматика захисту',
    text: 'Забезпечує безперебійну та безпечну роботу сонячної електростанції, а також автоматично захищає головне обладнання в разі виникнення небезпечних ситуацій.',
    image: [img3_webp, img3_png],
  },
  {
    id: 4,
    title: 'Система кріплень',
    text: 'Алюмінієва конструкція завдяки якій сонячні батареї надійно закріплені на даху вашого будинку. Складають 13-17% вартості всієї системи.',
    image: [img5_webp, img5_png],
  },
];

export const ElementsStationInvestment = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Елементи сонячної електростанції </TitleSpan>
        <br /> для власного використання
      </SectionTitle>
      <List>
        {elementsList.map(item => (
          <Item key={item.id}>
            <picture>
              <source type="image/webp" srcSet={item.image[0]} />
              <source type="image/jpg" srcSet={item.image[1]} />
              <Img src={item.image[1]} loading="lazy" alt={item.title} />
            </picture>
            <Info>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Info>
          </Item>
        ))}
      </List>
    </Inner>
  );
};
