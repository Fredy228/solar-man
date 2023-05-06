import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
} from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsInvestment = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги сонячних станцій </TitleSpan>
        <br /> після встановлення
      </SectionTitle>
      <List>
        <Item>
          <TitleBenefits>
            <Icon name="icon-saving" />
            Відсутність квітанцій за електроенергію
          </TitleBenefits>
          <TextBenefits>
            Система працює на зменшення вашого власного споживання та продаж
            надлишку електроенергії за високим Зеленим тарифом в мережу.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-payment" />
            Щомісячні виплати на карту
          </TitleBenefits>
          <TextBenefits>
            Ви можете продавати надлишки електроенергії в мережу за Зеленим
            тарифом за допомогою нашої системи.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-scales" />
            Стійкість та незалежність від зростання тарифів
          </TitleBenefits>
          <TextBenefits>
            Завдяки зменшенню споживання електроенергії з мережі, ви більше не
            залежите від зростання тарифів.
          </TextBenefits>
        </Item>
      </List>
    </Inner>
  );
};
