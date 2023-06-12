import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { Inner, Item, List, TitleBenefits } from './Benefits.styled';
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
          <Icon name="icon-saving" />
          <TitleBenefits>Відсутність квітанцій за електроенергію</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-payment" />
          <TitleBenefits>Щомісячні виплати на карту</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-scales" />
          <TitleBenefits>Незалежність від зростання тарифів</TitleBenefits>
        </Item>
      </List>
    </Inner>
  );
};
