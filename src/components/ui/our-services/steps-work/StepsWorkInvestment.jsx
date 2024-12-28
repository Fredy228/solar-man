import {
  SectionTitle,
  SectionSubtitle,
} from '../../../../common-style/SectionTitle.styled';

import { Inner, Item, List, NumStepBox, Title, Text } from './StepsWork.styled';
import { Icon } from 'components/reused/icon/Icon';

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
    ico: 'icon-check-doc',
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
    ico: 'icon-signature',
  },
];

export const StepsWorkInvestment = () => {
  return (
    <Inner>
      <SectionTitle>Етапи робіт</SectionTitle>
      <SectionSubtitle>
        За кожний єтап є відповідальний відділ, який контролює якість і деталі{' '}
        <br />
        кожного кроку співпраці
      </SectionSubtitle>
      <List>
        {steps.map(item => (
          <Item key={item.id} isRows={true}>
            <NumStepBox>
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
