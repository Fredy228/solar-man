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

export const BenefitsBackupPower = () => {
  return (
    <Inner>
      <SectionTitle>
        <TitleSpan>Переваги резервного живлення</TitleSpan>
        <br /> для вашого будинку
      </SectionTitle>
      <List>
        <Item>
          <TitleBenefits>
            <Icon name="icon-accumulator" />
            Нестрашні відключення
          </TitleBenefits>
          <TextBenefits>
            Навіть під час відключення електромережі вулиці, ваш будинок може
            продовжувати отримувати електроенергію завдяки сонячній
            електростанції.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-nut" />
            Можливість збільшення автономності
          </TitleBenefits>
          <TextBenefits>
            Система дозволяє розширювати потужність автономних інверторів,
            акумуляторів і навіть встановлювати сонячні панелі поетапно в
            залежності від потреб споживача.
          </TextBenefits>
        </Item>
        <Item>
          <TitleBenefits>
            <Icon name="icon-shield" />
            Гарантія 10-ки років
          </TitleBenefits>
          <TextBenefits>
            Літієві акумулятори мають довгу термін експлуатації понад 15 років і
            більше 6000 циклів заряду/розряду, що робить їх ефективними для
            зберігання сонячної енергії. Сонячні панелі мають термін служби
            понад 25 років.
          </TextBenefits>
        </Item>
      </List>
    </Inner>
  );
};
