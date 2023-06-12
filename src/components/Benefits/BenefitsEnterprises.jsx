import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { Inner, Item, List, TitleBenefits } from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsEnterprises = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги </TitleSpan>
        <br /> для вашого бізнесу
      </SectionTitle>
      <List>
        <Item>
          <Icon name="icon-profit" />
          <TitleBenefits>Електроенергія по 1 грн за кВт</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-documents-cross" />
          <TitleBenefits>Без додаткових реєстарцій</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-refund" />
          <TitleBenefits>Швидкий дохід від інвестицій</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-ecology" />
          <TitleBenefits>Екологічно чиста енергія</TitleBenefits>
        </Item>
      </List>
    </Inner>
  );
};
