import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import {
  Inner,
  Item,
  List,
  NumStepBox,
  NumStep,
  Title,
  Text,
} from './StepsWork.styled';
import { Icon } from 'components/Icon/Icon';

const steps = [
  {
    id: 1,
    title: "Виїзд на об'єкт",
    text: 'Проводимо огляд місця майбутньої установки, враховуючи всі нюанси, що можуть вплинути на ефективність системи.',
    ico: 'icon-car',
  },
  {
    id: 2,
    title: 'Підготовка проекту СЕС',
    text: 'Процес розробки і планування установки сонячних модулів та інших компонентів',
    ico: 'icon-desing',
  },
  {
    id: 3,
    title: 'Перевірка документів на відповідність вимогам.',
    text: 'Проводимо аналіз документації на приєднання до енергомережі. Закуповуємо та налаштовуємо необхідне обладнання.',
    ico: 'icon-signature',
  },
  {
    id: 4,
    title: 'Монтаж та встановлення станції',
    text: 'Проводимо монтаж та встановлення всіх компонентів сонячної електростанції.',
    ico: 'icon-building',
  },
  {
    id: 5,
    title: 'Оформлення Зеленого тарифу',
    text: 'Ми підготовлюємо повний пакет документів для приєднання до Обленерго, супроводимо клієнта до першої виплати Зеленого тарифу.',
    ico: 'icon-solar_energy',
  },
];

export const StepsWorkInvestment = () => {
  return (
    <Inner>
      <SectionTitle color="true">
        <TitleSpan>Етапи</TitleSpan> робіт
      </SectionTitle>
      <List>
        {steps.map(item => (
          <Item key={item.id}>
            <NumStepBox>
              <NumStep>{item.id}</NumStep>
              <Icon name={item.ico} />
            </NumStepBox>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </Item>
        ))}
      </List>
    </Inner>
  );
};
