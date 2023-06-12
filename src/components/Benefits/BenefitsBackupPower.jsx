import {
  SectionTitle,
  TitleSpan,
} from 'components/SectionTitle/SectionTitle.styled';

import { Inner, Item, List, TitleBenefits } from './Benefits.styled';
import { Icon } from 'components/Icon/Icon';

export const BenefitsBackupPower = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги резервного живлення</TitleSpan>
        <br /> для вашого будинку
      </SectionTitle>
      <List>
        <Item>
          <Icon name="icon-accumulator" />
          <TitleBenefits>Нестрашні відключення</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-nut" />
          <TitleBenefits>Можливість збільшення автономності</TitleBenefits>
        </Item>
        <Item>
          <Icon name="icon-shield" />
          <TitleBenefits>Гарантія 10-ки років</TitleBenefits>
        </Item>
      </List>
    </Inner>
  );
};
