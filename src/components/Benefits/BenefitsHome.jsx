import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { Inner, Item, List, TitleBenefits } from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsHome = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги сонячних станцій </TitleSpan>
        <br /> для вашого будинку
      </SectionTitle>
      <List>
        <Item>
          <Icon name="icon-saving" />
          <TitleBenefits>Сонце дарує електроенергію для житла</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-accumulator" />
          <TitleBenefits>Нестрашні відключення</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-shield" />
          <TitleBenefits>Гарантія 10-ки років</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-ecology" />
          <TitleBenefits>Екологічно чиста енергія</TitleBenefits>
        </Item>
      </List>
    </Inner>
  );
};
