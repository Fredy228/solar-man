import { SectionTitle } from '../../CommonStyle/SectionTitle.styled';

import {
  Inner,
  List,
  Item,
  Info,
  Title,
  Text,
  Img,
  LastItem,
} from './ElementsStation.styled';

import img1_webp from '../../img/ourServices/home/home-1.webp';
import img1_png from '../../img/ourServices/home/home-1.png';
import img2_webp from '../../img/ourServices/home/home-2.webp';
import img2_png from '../../img/ourServices/home/home-2.png';
import img5_webp from '../../img/ourServices/home/home-5.webp';
import img5_png from '../../img/ourServices/home/home-5.png';

const elementsList = [
  {
    id: 1,
    title: 'Автономний інвертор',
    text: 'Цей компонент відповідає за перетворення енергії з акумуляторів на 220 В. Його вартість становить близько 15% від загальної вартості системи.',
    image: [img1_webp, img1_png],
  },
  {
    id: 2,
    title: 'Акумуляторна батарея',
    text: 'Ця частина системи призначена для зберігання запасу енергії та складає близько 50-60% вартості всього комплексу.',
    image: [img2_webp, img2_png],
  },
  {
    id: 3,
    title: 'Автоматика захисту',
    text: 'Забезпечує безперебійну та безпечну роботу сонячної електростанції, а також автоматично захищає головне обладнання в разі виникнення небезпечних ситуацій.',
    image: [img5_webp, img5_png],
  },
];

export const ElementsStationBackupPower = () => {
  return (
    <Inner>
      <SectionTitle>
        Елементи сонячної електростанції
        <br /> для власного використання
      </SectionTitle>
      <List>
        {elementsList.map(item => (
          <Item key={item.id}>
            <picture>
              <source type="image/webp" srcSet={item.image[0]} />
              <source type="image/png" srcSet={item.image[1]} />
              <Img src={item.image[1]} loading="lazy" alt={item.title} />
            </picture>
            <Info>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Info>
          </Item>
        ))}
        <Item>
          <LastItem>
            <Text>
              Можливі індивідуальні варіації, але більшість задач вирішуються
              саме завдяки цим зазначеним елементам.
            </Text>
          </LastItem>
        </Item>
      </List>
    </Inner>
  );
};
