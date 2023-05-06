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
    title: 'Енергетичний аналіз споживання',
    text: 'Проводимо повний аудит внутрішнього споживання електроенергії',
    ico: 'icon-monitoring',
  },
  {
    id: 2,
    title: 'Проектування сонячної станції',
    text: 'Процес розробки і планування установки сонячних модулів та інших компонентів',
    ico: 'icon-desing',
  },
  {
    id: 3,
    title: 'Підбір обладнання',
    text: 'Підбираємо найбільш підходяще обладнання для сонячної електростанції згідно з проектом',
    ico: 'icon-search',
  },
  {
    id: 4,
    title: 'Розрахунок вартості',
    text: 'Розрахунок продуктивності сонячної електростанції, а також оцінюємо її економічну доцільність ',
    ico: 'icon-calculate',
  },
  {
    id: 5,
    title: 'Підписання договору',
    text: 'Встановлюємо терміни реалізації проекту, календарний графік оплат та загальні умови ведення проекту',
    ico: 'icon-signature',
  },
  {
    id: 6,
    title: 'Будівництво СЕС',
    text: 'Розробляємо розрахунки продуктивності сонячної станції, враховуючи тарифи та економічну доцільність',
    ico: 'icon-building',
  },
];

export const StepsWorkEnterprises = () => {
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
