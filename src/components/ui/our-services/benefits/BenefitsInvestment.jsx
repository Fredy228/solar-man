import {
  SectionSubtitle,
  SectionTitle,
} from '../../../../common-style/SectionTitle.styled';

import {
  Inner,
  Item,
  List,
  TitleBenefits,
  TextBenefits,
  WrapperSvg,
} from './Benefits.styled';
import { Icon } from 'components/reused/icon/Icon';

export const BenefitsInvestment = () => {
  return (
    <Inner>
      <SectionTitle>Переваги сонячних станцій після встановлення</SectionTitle>
      <SectionSubtitle>
        Чому варто якомога скоріше скористатись можливостями
      </SectionSubtitle>
      <List>
        <Item>
          <WrapperSvg>
            <Icon name="icon-saving" />
          </WrapperSvg>
          <TitleBenefits>Відсутність квітанцій за електроенергію</TitleBenefits>
          <TextBenefits>
            Система працює на зменшення вашого власного споживання та продаж
            надлишку електроенергії за високим Зеленим тарифом в мережу.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-payment" />
          </WrapperSvg>
          <TitleBenefits>Щомісячні виплати на карту</TitleBenefits>
          <TextBenefits>
            Ви можете продавати надлишки електроенергії в мережу за Зеленим
            тарифом за допомогою нашої системи.
          </TextBenefits>
        </Item>
        <Item>
          <WrapperSvg>
            <Icon name="icon-scales" />
          </WrapperSvg>
          <TitleBenefits>
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
